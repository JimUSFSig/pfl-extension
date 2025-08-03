document.addEventListener("DOMContentLoaded", function () {
  const text = document.body.innerText;

  const stopWords = new Set([
    "the", "and", "for", "are", "with", "that", "have", "this", "from", "was", "your",
    "you", "but", "not", "all", "can", "our", "has", "any", "its", "out", "who",
    "get", "had", "they", "what", "when", "where", "which", "will", "would", "there",
    "their", "been", "them", "then", "were", "more", "some", "into", "about", "over",
    "also", "only", "each", "such", "very", "just", "than", "like", "most", "how", "why",
    "did", "does", "could", "should", "shall", "may", "might", "must", "because", "while",
    "until", "above", "below", "again", "once", "here", "after", "before", "during", "both"
  ]);

  const words = text.match(/\b\w+\b/g) || [];

  const freqMap = {};
  words.forEach(word => {
    const lower = word.toLowerCase();
    if (lower.length > 3 && !stopWords.has(lower)) {
      freqMap[lower] = (freqMap[lower] || 0) + 1;
    }
  });

  const sortedWords = Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)
    .map(([word]) => word);

  const output = sortedWords.join(", ");
  const outputEl = document.getElementById("keywords");
  if (outputEl) {
    outputEl.textContent = output;
  } else {
    console.warn("Element with id='keywords' not found.");
  }
});
