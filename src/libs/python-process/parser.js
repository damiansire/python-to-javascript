const { isVariableAssignment } = require("./detectElement.js");
const KeyCounter = require("../../data-structures/key-counter.js");

const getVariableIdentifier = (line) => {
  //Evita los espacios, ejemplo numero1 = 5, numero1    =    5, '    numero2    =    10    '
  const patron = /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=/;
  const coincidencia = line.match(patron);
  if (coincidencia && coincidencia.length > 1) {
    return coincidencia[1];
  }
  return null;
};

const processLine = (line, variablesCount, variableHistory) => {
  if (isVariableAssignment(line)) {
    const identifier = getVariableIdentifier(line);
    if (variableHistory.has(identifier)) {
      return line;
    }
    if (variablesCount.getOccurrences(identifier) > 1) {
      start = variableHistory.has(identifier) ? "" : "let";
    } else {
      start = "const";
    }
    variableHistory.add(identifier);
    return `${start} ${line}`;
  }
  return `${line} : No contemplada`;
};

function countVariables(lines) {
  const variablesCount = new KeyCounter();
  for (line of lines) {
    if (isVariableAssignment(line)) {
      const identifier = getVariableIdentifier(line);
      variablesCount.addOcurrence(identifier);
    }
  }

  return variablesCount;
}

const parserContent = (content) => {
  const fileLines = content.split(/\r?\n/);
  const processedLines = [];
  const variablesCount = countVariables(fileLines);
  const variableHistory = new Set();
  for (line of fileLines) {
    const processedLine = processLine(line, variablesCount, variableHistory);
    processedLines.push(processedLine);
  }
  let parsedContent = processedLines.join("\n");
  return parsedContent;
};

module.exports = { parserContent };
