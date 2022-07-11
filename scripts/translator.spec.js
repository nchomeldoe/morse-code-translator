import { describe, expect, it } from "@jest/globals";
import {
  translateEnglishToMorse,
  translateMorseToEnglish,
} from "./translator.js";

describe("english to morse code translator", () => {
  it("should translate 'hello' to '.... . .-.. .-.. ---'", () => {
    const result = translateEnglishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should insert spaces between letters and forward slashes between words", () => {
    const result = translateEnglishToMorse("hello world");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });

  it("should translate capital letters the same as lower case ones", () => {
    const result = translateEnglishToMorse("My name is Nathalia");
    expect(result).toBe(
      "-- -.-- / -. .- -- . / .. ... / -. .- - .... .- .-.. .. .-",
    );
  });

  it("should translate numbers, full stops and question marks", () => {
    const result = translateEnglishToMorse("How old are you? 33.");
    expect(result).toBe(
      ".... --- .-- / --- .-.. -.. / .- .-. . / -.-- --- ..- ..--.. / ...-- ...-- .-.-.-",
    );
  });

  it("should not translate any symbols that are not in the dictionary", () => {
    const result = translateEnglishToMorse(":");
    expect(result).toBeNull;
  });
});

describe("morse code to english translator", () => {
  it("should translate '.... . .-.. .-.. ---' to 'hello", () => {
    const result = translateMorseToEnglish(".... . .-.. .-.. ---");
    expect(result).toBe("hello");
  });

  it("should remove spaces between letters and forward slashes between words", () => {
    const result = translateMorseToEnglish(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    );
    expect(result).toBe("hello world");
  });

  it("should translate numbers, full stops and question marks", () => {
    const result = translateMorseToEnglish(
      ".... --- .-- / --- .-.. -.. / .- .-. . / -.-- --- ..- ..--.. / ...-- ...-- .-.-.-",
    );
    expect(result).toBe("how old are you? 33.");
  });

  it("should not respond to any symbols other than dots, dahses, spaces and forward slashes", () => {
    const result = translateMorseToEnglish("hello");
    expect(result).toBeNull;
  });
});
