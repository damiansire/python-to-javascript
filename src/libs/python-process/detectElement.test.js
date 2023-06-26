const { isVariableAssignment } = require("./detectElement");

describe("isVariableAssignment", () => {
  test("should return true if linea are variable assignment", () => {
    input = "name = 'Damian' ";
    const output = isVariableAssignment(input);
    expect(output).toBe(true);
  });
});
