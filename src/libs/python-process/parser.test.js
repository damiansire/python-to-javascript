const { parserContent } = require("./parser");
describe("parserContent", () => {
  test("should return parsed variable if you have 2 diferent variables", () => {
    const input = `name = "damian"
surname = "sire"`;
    const expected = `const name = "damian"
const surname = "sire"`;
    const output = parserContent(input);
    expect(output).toEqual(expected);
  });
});
