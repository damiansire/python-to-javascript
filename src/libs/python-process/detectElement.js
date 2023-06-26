const isVariableAssignment = (line) => {
  const patronAsignacion = /^\s*([\w$]+)\s*=\s*.+$/;
  return patronAsignacion.test(line);
};

module.exports = { isVariableAssignment };
