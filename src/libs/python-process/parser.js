const { isVariableAssignment } = require("./detectElement.js");

const processLine = (line) => {
  if (isVariableAssignment(line)) {
    return "const " + line;
  }
  console.log("test");
  return `${line} : No contemplada`;
};

const parserContent = (content) => {
  const fileLines = content.split(/\r?\n/);
  let processLines = fileLines.map(processLine);
  let parsedContent = processLines.join("\n");
  return parsedContent;
};

module.exports = { parserContent };
