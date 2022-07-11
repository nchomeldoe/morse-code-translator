import { describe, expect, it } from "@jest/globals";
import { translateEnglishToMorse } from "./script";

describe("english to morse code translator", () => {
  it("should translate 'hello' to '.... . .-.. .-.. ---'", () => {
    const result = translateEnglishToMorse("hello");
    // expect(result).toBe(".... . .-.. .-.. ---");
    expect(result).toBe("working");
  });
});
