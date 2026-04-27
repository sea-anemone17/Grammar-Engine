
import { patterns } from "./patterns.js";
import { analyzeSentence } from "./analyzer.js";
import { renderPatternCard, renderSavedSentence, escapeHTML } from "./feedback.js";
import { saveSentence, loadData, clearAllData, exportData } from "./storage.js";
import { createQuiz } from "./quiz.js";
import { renderStats } from "./stats.js";

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function setActiveTab(tabName) {
  $$(".tab-button").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabName));
  $$(".panel").forEach(panel => panel.classList.remove("active"));
  $(`#panel-${tabName}`).classList.add("active");

  if (tabName === "review") renderReview();
  if (tabName === "stats") renderStats($("#statsBox"));
  if (tabName === "patterns") renderPatterns();
}

function initTabs() {
  $$(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });
}

function analyzeCurrentSentence() {
  const sentence = $("#sentenceInput").value.trim();
  const resultBox = $("#analysisResult");

  if (!sentence) {
    resultBox.innerHTML = `<article class="pattern-card"><h3>문장을 입력해 주세요.</h3></article>`;
    return [];
  }

  const candidates = analyzeSentence(sentence);

  if (!candidates.length) {
    resultBox.innerHTML = `
      <article class="pattern-card">
        <h3>감지된 패턴이 없습니다.</h3>
        <p class="muted">이 경우에는 직접 패턴 DB에서 검색하거나, 새 패턴으로 확장할 수 있습니다.</p>
      </article>
    `;
    return [];
  }

  resultBox.innerHTML = `
    <h2>분석 후보</h2>
    ${candidates.map(renderPatternCard).join("")}
  `;
  return candidates;
}

function initAnalyzeMode() {
  $("#analyzeBtn").addEventListener("click", analyzeCurrentSentence);

  $("#clearInputBtn").addEventListener("click", () => {
    $("#sentenceInput").value = "";
    $("#analysisResult").innerHTML = "";
  });

  $("#saveSentenceBtn").addEventListener("click", () => {
    const sentence = $("#sentenceInput").value.trim();
    if (!sentence) {
      alert("저장할 문장을 먼저 입력해 주세요.");
      return;
    }
    const candidates = analyzeSentence(sentence);
    saveSentence(sentence, candidates.map(c => c.id));
    alert("문장이 저장되었습니다.");
    renderStats($("#statsBox"));
  });
}

function initQuizMode() {
  $("#newQuizBtn").addEventListener("click", () => {
    createQuiz($("#quizBox"));
    renderStats($("#statsBox"));
  });
  createQuiz($("#quizBox"));
}

function renderReview() {
  const data = loadData();
  const list = $("#reviewList");

  if (!data.savedSentences.length && !data.attempts.length) {
    list.innerHTML = `
      <div class="saved-card">
        <h3>아직 저장된 기록이 없습니다.</h3>
        <p class="muted">문장 분석 화면에서 문장을 저장하거나, 패턴 퀴즈를 풀어 보세요.</p>
      </div>
    `;
    return;
  }

  const savedHTML = data.savedSentences.map(renderSavedSentence).join("");

  const attemptsHTML = data.attempts.slice(0, 20).map(item => `
    <article class="saved-card">
      <div class="badge-row">
        <span class="badge">${item.mode || "quiz"}</span>
        <span class="badge ${item.isCorrect ? "" : "score-badge"}">${item.isCorrect ? "정답" : "오답"}</span>
      </div>
      <p class="example-sentence">${escapeHTML(item.sentence || "")}</p>
      <p class="muted">선택: ${escapeHTML(item.selectedPattern || "-")} / 정답: ${escapeHTML((item.correctPatterns || []).join(", "))}</p>
    </article>
  `).join("");

  list.innerHTML = `
    <h3>저장 문장</h3>
    ${savedHTML || `<p class="muted">저장 문장이 없습니다.</p>`}
    <h3>최근 풀이 기록</h3>
    ${attemptsHTML || `<p class="muted">풀이 기록이 없습니다.</p>`}
  `;
}

function initReviewMode() {
  $("#exportBtn").addEventListener("click", exportData);
  $("#clearDataBtn").addEventListener("click", () => {
    if (confirm("정말 모든 localStorage 학습 기록을 삭제할까요?")) {
      clearAllData();
      renderReview();
      renderStats($("#statsBox"));
    }
  });
}

function renderPatterns() {
  const query = ($("#patternSearch")?.value || "").trim().toLowerCase();
  const filtered = patterns.filter(pattern => {
    const haystack = [
      pattern.id,
      pattern.name,
      pattern.summary,
      pattern.rule,
      ...(pattern.keywords || [])
    ].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });

  $("#patternList").innerHTML = filtered.map(pattern => renderPatternCard({ ...pattern, score: "-", detectedByRule: false })).join("");
}

function initPatternMode() {
  $("#patternSearch").addEventListener("input", renderPatterns);
  renderPatterns();
}

function init() {
  initTabs();
  initAnalyzeMode();
  initQuizMode();
  initReviewMode();
  initPatternMode();
  renderStats($("#statsBox"));
}

init();
