import { translateEnglishToMorse, searchInDictionary } from "./translator.js";

// query selectors
const englishSource = document.querySelector("#english-source-text");
const morseTarget = document.querySelector("#morse-code-target-text");
console.dir(englishSource);
console.dir(morseTarget);

// functions to render on page

const renderMorseOnPage = (e) => {
  let lastChar = e.target.value.substring(e.target.value.length - 1);
  if (lastChar) {
    const dictionaryEntry = searchInDictionary(lastChar, "english");
    if (!dictionaryEntry) {
      e.target.value = e.target.value.slice(0, -1);
      alert(`Symbol ${lastChar} unavailable`);
    }
  }
  morseTarget.innerHTML = translateEnglishToMorse(e.target.value);
};

// event listeners
englishSource.addEventListener("input", renderMorseOnPage);
