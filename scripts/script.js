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

// functions
export const translateEnglishToMorse = (englishText) => {
  return "working";
};
