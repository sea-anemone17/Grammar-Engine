
import { loadData } from "./storage.js";
import { patterns } from "./patterns.js";

export function getStats() {
  const data = loadData();
  const attempts = data.attempts || [];
  const saved = data.savedSentences || [];
  const wrong = attempts.filter(a => a.isCorrect === false);

  const weakMap = {};
  wrong.forEach(item => {
    (item.correctPatterns || []).forEach(id => {
      weakMap[id] = (weakMap[id] || 0) + 1;
    });
  });

  const weakPatterns = Object.entries(weakMap)
    .sort((a, b) => b[1] - a[1])
    .map(([id, count]) => ({
      pattern: patterns.find(p => p.id === id),
      count
    }))
    .filter(item => item.pattern);

  const today = new Date().toISOString().slice(0, 10);
  const todayCount = attempts.filter(a => (a.createdAt || "").startsWith(today)).length;

  return {
    attemptsCount: attempts.length,
    savedCount: saved.length,
    wrongCount: wrong.length,
    todayCount,
    weakPatterns
  };
}

export function renderStats(container) {
  const stats = getStats();
  const weakHTML = stats.weakPatterns.length
    ? stats.weakPatterns.slice(0, 5).map(item => `
      <div class="stat-card">
        <span class="badge">${item.pattern.id}</span>
        <h3>${item.pattern.name}</h3>
        <p class="muted">오답 ${item.count}회</p>
      </div>
    `).join("")
    : `<div class="stat-card"><h3>아직 오답 기록이 없습니다</h3><p class="muted">퀴즈를 풀면 약점 패턴이 표시됩니다.</p></div>`;

  container.innerHTML = `
    <div class="stat-card">
      <strong>${stats.attemptsCount}</strong>
      <p>전체 풀이 기록</p>
    </div>
    <div class="stat-card">
      <strong>${stats.savedCount}</strong>
      <p>저장 문장</p>
    </div>
    <div class="stat-card">
      <strong>${stats.wrongCount}</strong>
      <p>오답 기록</p>
    </div>
    ${weakHTML}
  `;

  const today = document.getElementById("todayCount");
  if (today) today.textContent = stats.todayCount;
}
