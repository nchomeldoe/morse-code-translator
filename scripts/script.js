import {
  translateEnglishToMorse,
  translateMorseToEnglish,
  searchInDictionary,
} from "./translator.js";

// query selectors
const englishSource = document.querySelector("#english-source-text");
const morseTarget = document.querySelector("#morse-code-target-text");
const morseSource = document.querySelector("#morse-code-source-text");
const englishTarget = document.querySelector("#english-target-text");

// functions to render on page

const renderMorseOnPage = (e) => {
  let lastChar = e.target.value.substring(e.target.value.length - 1);
  if (lastChar) {
    const dictionaryEntry = searchInDictionary(
      lastChar.toLowerCase(),
      "english",
    );
    if (!dictionaryEntry) {
      e.target.value = e.target.value.slice(0, -1);
      alert(`Symbol ${lastChar} unavailable`);
    }
  }
  morseTarget.innerHTML = translateEnglishToMorse(e.target.value);
};

const renderEnglishOnPage = (e) => {
  const acceptableChars = [" ", ".", "-", "/"];
  let lastChar = e.target.value.substring(e.target.value.length - 1);
  if (lastChar && !acceptableChars.includes(lastChar)) {
    e.target.value = e.target.value.slice(0, -1);
    alert(`Symbol ${lastChar} unavailable`);
  }
  englishTarget.innerHTML = translateMorseToEnglish(e.target.value);
};

// event listeners
englishSource.addEventListener("input", renderMorseOnPage);
morseSource.addEventListener("input", renderEnglishOnPage);
