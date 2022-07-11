import { describe, expect, it } from "@jest/globals";
import { translateEnglishToMorse } from "./script";

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
  it("should return '[symbol] unavailable' if a symbol that is not in the disctionary is entered", () => {
    const result = translateEnglishToMorse("This is a test:");
    expect(result).toContain("':' unavailable");
  });
});
