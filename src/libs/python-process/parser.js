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
  let parsedContent = "";
  for (const line of fileLines) {
    const result = processLine(line);
    parsedContent += result;
  }
  return parsedContent;
};

module.exports = { parserContent };
