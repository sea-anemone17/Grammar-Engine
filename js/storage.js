
const STORAGE_KEY = "grammar_engine_data_v1";

const initialData = {
  attempts: [],
  savedSentences: [],
  starredPatterns: []
};

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...initialData, ...JSON.parse(raw) } : structuredClone(initialData);
  } catch {
    return structuredClone(initialData);
  }
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function saveSentence(sentence, detectedPatterns = []) {
  const data = loadData();
  data.savedSentences.unshift({
    id: Date.now(),
    sentence,
    detectedPatterns,
    createdAt: new Date().toISOString()
  });
  saveData(data);
}

export function saveAttempt(attempt) {
  const data = loadData();
  data.attempts.unshift({
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...attempt
  });
  saveData(data);
}

export function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportData() {
  const data = loadData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `grammar-engine-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
