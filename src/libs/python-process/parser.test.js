const { parserContent } = require("./parser");
describe("parserContent", () => {
  test("should declare variables with const if not repeated", () => {
    const input = `name = "damian"
surname = "sire"`;
    const expected = `const name = "damian"
const surname = "sire"`;
    const output = parserContent(input);
    expect(output).toEqual(expected);
  });
  test("should declare the variables with let if they are repeated", () => {
    const input = `name = "damian"
surname = "sire"
name = "pedro"`;
    const expected = `let name = "damian"
const surname = "sire"
name = "pedro"`;
    const output = parserContent(input);
    expect(output).toEqual(expected);
  });
});
