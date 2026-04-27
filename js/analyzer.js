
import { patterns } from "./patterns.js";

const detectorMap = {
  P01: s => /\bboth\b/i.test(s),
  P02: s => /\b(so|such)\b/i.test(s) && /\bthat\b/i.test(s),
  P03: s => /\bfor\s+\w+\s+to\s+\w+/i.test(s),
  P04: s => /^\s*to\s+\w+/i.test(s),
  P05: s => /^\s*\w+ing\b/i.test(s),
  P06: s => /^\s*(that|what|who|how|whatever|whoever)\b/i.test(s),
  P07: s => s.split(/\s+/).length >= 16 && /\b(who|which|that|to|for|of|in|with|preparing|entering)\b/i.test(s),
  P08: s => /^\s*it\s+(is|was|'s|takes|took|does|doesn’t|doesn't|does not)\b/i.test(s),
  P09: s => /^\s*it\s+(is|was|'s)\b.+\bthat\b/i.test(s),
  P10: s => /\b(can|could|may|might|must|should|will|would)\s+be\s+\w+(ed|en)\b/i.test(s) || /\b(is|are|was|were|be|been|being|get|gets|got)\s+\w+(ed|en)\b/i.test(s),
  P11: s => /\b(who|which|that|whom|whose)\b/i.test(s),
  P12: s => /,\s*\w+ing\b/i.test(s) || /\b\w+(ed|en)\b\s+(by|in|with|under|during)\b/i.test(s) || /\b\w+\s+\w+ing\b/i.test(s),
  P13: s => /\b(and|or|but)\b/i.test(s),
  P14: s => /\b\w+\s+to\s+\w+/i.test(s),
  P15: s => /\b(of|for|in|on|about|by|with|without|to)\s+\w+ing\b/i.test(s),
  P16: s => /\b(remember|forget|regret|try|stop|remembered|forgot|regretted|tried|stopped)\b/i.test(s),
  P17: s => /\b(say|said|think|know|believe|question|wonder|ask|tell|show|realize)\b.+\b(that|whether|if|what|who|how|why)\b/i.test(s),
  P18: s => /\b(of|in|on|at|for|about|by|with|without|to)\s+(what|whether|who|how|\w+ing)\b/i.test(s),
  P19: s => /\b(is|are|was|were|be|being|been|seems|becomes|became|feel|felt|look|looks)\b.+\b(to|that|\w+ing)\b/i.test(s),
  P20: s => /\b(ask|tell|want|expect|allow|encourage|persuade|enable|force|invite)\w*\s+\w+\s+to\s+\w+/i.test(s),
  P21: s => /\b(see|saw|seen|hear|heard|feel|felt|make|made|let|have|had|help|watch|notice|keep|kept)\b.+\b(\w+|to)\b/i.test(s),
  P22: s => /\b(make|made|find|found|consider|considered|keep|kept|call|called|elect|elected)\b.+\b(him|her|them|it|me|you|us)\b/i.test(s),
  P23: s => /\b(give|gave|send|sent|show|showed|tell|told|buy|bought|find|found|win|won)\b\s+\w+\s+\w+/i.test(s),
  P24: s => /^\s*(the\s+)?(opportunity|experience|reading|drinking|overconfidence|advertisements|consumption|leadership|painters|diplomatic|his|their|children|message|government)\b/i.test(s),
  P25: s => /\b(than|as if|as though|like)\b/i.test(s),
  P26: s => /\b(when|while|if|until|because|although|though|as)\b/i.test(s),
  P27: s => /\b(what|whatever|whoever|whichever)\b/i.test(s),
  P28: s => /\b(has|have|had)\s+(been\s+)?\w+(ed|en)\b/i.test(s) || /\bsince\b/i.test(s),
  P29: s => /\b(what|how|who|why|whether|if)\b.+\b(is|are|was|were|do|does|did|can|could|will|would|may|might)\b/i.test(s),
  P30: s => /\b(in order to|so as to|to\s+\w+)\b/i.test(s),
  P31: s => /\bnot\b.+\bbut\b/i.test(s),
  P32: s => /\b(it|that|those|one|ones)\b/i.test(s),
  P33: s => /\b(such as|including|like)\b/i.test(s),
  P34: s => /\b(enough to|too\b.+\bto|so\b.+\bthat|such\b.+\bthat)\b/i.test(s),
  P35: s => /\b(is|are|was|were|seem|seems|become|becomes|feel|feels|look|looks)\b/i.test(s)
};

function keywordScore(sentence, pattern) {
  const lower = sentence.toLowerCase();
  return (pattern.keywords || []).filter(k => {
    if (k.includes(" ") || k.includes("-")) return lower.includes(k.toLowerCase().replace("-", ""));
    return lower.includes(k.toLowerCase());
  }).length;
}

export function analyzeSentence(sentence) {
  const normalized = sentence.trim();
  if (!normalized) return [];

  return patterns.map(pattern => {
    const detector = detectorMap[pattern.id];
    const detected = detector ? detector(normalized) : false;
    const kScore = keywordScore(normalized, pattern);
    const score = (detected ? 4 : 0) + kScore;

    return {
      ...pattern,
      score,
      detectedByRule: detected
    };
  })
  .filter(item => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 8);
}

export function getPatternById(id) {
  return patterns.find(pattern => pattern.id === id);
}
