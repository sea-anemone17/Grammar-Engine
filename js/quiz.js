
import { examples } from "./examples.js";
import { patterns } from "./patterns.js";
import { saveAttempt } from "./storage.js";
import { escapeHTML } from "./feedback.js";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function makeOptions(correctIds) {
  const correct = pickRandom(correctIds);
  const distractors = shuffle(patterns.filter(p => !correctIds.includes(p.id))).slice(0, 3).map(p => p.id);
  return shuffle([correct, ...distractors]).map(id => patterns.find(p => p.id === id)).filter(Boolean);
}

export function createQuiz(container) {
  const validExamples = examples.filter(ex => ex.patterns && ex.patterns.length);
  const example = pickRandom(validExamples);
  const options = makeOptions(example.patterns);
  const correctSet = new Set(example.patterns);

  container.innerHTML = `
    <div class="quiz-card">
      <div class="badge-row">
        <span class="badge">예문 ${String(example.id).padStart(3, "0")}</span>
        <span class="badge">난도 ${example.difficulty}</span>
      </div>
      <p class="example-sentence">${escapeHTML(example.sentence)}</p>
      <p class="muted">이 문장에서 작동하는 핵심 어법 패턴을 고르세요.</p>
      <div class="quiz-options">
        ${options.map(option => `
          <button class="option-button" data-id="${option.id}">
            <strong>${option.id}</strong> ${escapeHTML(option.name)}
          </button>
        `).join("")}
      </div>
      <div id="quizFeedback"></div>
    </div>
  `;

  container.querySelectorAll(".option-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedId = btn.dataset.id;
      const isCorrect = correctSet.has(selectedId);
      container.querySelectorAll(".option-button").forEach(button => {
        const id = button.dataset.id;
        if (correctSet.has(id)) button.classList.add("correct");
        if (id === selectedId && !isCorrect) button.classList.add("wrong");
        button.disabled = true;
      });

      const correctNames = example.patterns
        .map(id => patterns.find(p => p.id === id))
        .filter(Boolean)
        .map(p => `${p.id} ${p.name}`)
        .join(", ");

      document.getElementById("quizFeedback").innerHTML = `
        <div class="pattern-card">
          <h3>${isCorrect ? "정답입니다 ✨" : "조금 더 확인해 봐요 🧠"}</h3>
          <p>정답 패턴: <strong>${escapeHTML(correctNames)}</strong></p>
          <p class="muted">다음 단계: 왜 이 패턴인지 “판별 질문”으로 설명해 보세요.</p>
        </div>
      `;

      saveAttempt({
        mode: "quiz",
        sentenceId: example.id,
        sentence: example.sentence,
        selectedPattern: selectedId,
        correctPatterns: example.patterns,
        isCorrect
      });
    });
  });
}
