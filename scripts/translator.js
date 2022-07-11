// creating dicitonary arary containing objects with english and morse versions of each character
const englishMorseDictionary = [];
const morseCodeArray = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
  "-----",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
  ".-.-.-",
  "..--..",
  "/",
];

for (let i = 97; i <= 122; i++) {
  englishMorseDictionary.push({ english: String.fromCharCode(i) });
}
for (let i = 48; i <= 57; i++) {
  englishMorseDictionary.push({ english: String.fromCharCode(i) });
}
englishMorseDictionary.push(
  { english: "." },
  { english: "?" },
  { english: " " },
);

morseCodeArray.forEach((morseCodeItem, i) => {
  englishMorseDictionary[i].morse = morseCodeItem;
});

export const searchInDictionary = (char, sourceLanguage) => {
  const dictionaryEntry = englishMorseDictionary.find(
    (item) => item[sourceLanguage] === char,
  );
  return dictionaryEntry;
};

export const translateEnglishToMorse = (englishText) => {
  const englishChars = englishText.split("");
  const morseChars = englishChars.map((char) => {
    const regEx = /[A-Z]/;
    if (regEx.test(char)) {
      char = char.toLowerCase();
    }
    const dictionaryEntry = searchInDictionary(char, "english");

    if (dictionaryEntry) {
      return dictionaryEntry.morse;
    } else {
      return null;
    }
  });
  return morseChars.join(" ");
};

export const translateMorseToEnglish = (morseText) => {
  const morseChars = morseText.split(" ");
  const englishChars = morseChars.map((char) => {
    const dictionaryEntry = searchInDictionary(char, "morse");
    if (dictionaryEntry) {
      return dictionaryEntry.english;
    } else {
      return null;
    }
  });
  return englishChars.join("");
};
