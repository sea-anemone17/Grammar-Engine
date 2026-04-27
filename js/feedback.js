
import { getPatternById } from "./analyzer.js";

export function renderPatternCard(pattern) {
  const traps = (pattern.traps || []).map(t => `<li>${escapeHTML(t)}</li>`).join("");
  const questions = (pattern.questions || []).map(q => `<li>${escapeHTML(q)}</li>`).join("");
  const keywords = (pattern.keywords || []).map(k => `<span class="badge">${escapeHTML(k)}</span>`).join("");

  return `
    <article class="pattern-card">
      <div class="badge-row">
        <span class="badge">${pattern.id}</span>
        <span class="badge score-badge">후보 점수 ${pattern.score ?? "-"}</span>
        ${pattern.detectedByRule ? `<span class="badge">규칙 감지</span>` : ""}
      </div>
      <h3>${escapeHTML(pattern.name)}</h3>
      <p class="muted">${escapeHTML(pattern.summary || "")}</p>
      <div class="badge-row">${keywords}</div>

      <details open>
        <summary>판별 질문</summary>
        <ul>${questions || "<li>패턴 DB에서 질문을 추가할 수 있습니다.</li>"}</ul>
      </details>

      <details>
        <summary>규칙</summary>
        <p>${formatMultiline(pattern.rule)}</p>
      </details>

      <details>
        <summary>함정</summary>
        <ul>${traps || "<li>아직 함정 데이터가 없습니다.</li>"}</ul>
      </details>
    </article>
  `;
}

export function renderSavedSentence(item) {
  const patterns = (item.detectedPatterns || [])
    .map(id => getPatternById(id))
    .filter(Boolean)
    .map(p => `<span class="badge">${p.id} ${escapeHTML(p.name)}</span>`)
    .join("");

  return `
    <article class="saved-card">
      <h3>저장 문장</h3>
      <p class="example-sentence">${escapeHTML(item.sentence)}</p>
      <div class="badge-row">${patterns || `<span class="badge">패턴 미분석</span>`}</div>
      <p class="muted">${new Date(item.createdAt).toLocaleString("ko-KR")}</p>
    </article>
  `;
}

export function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function formatMultiline(value) {
  return escapeHTML(value || "").replaceAll("\\n", "<br>");
}
