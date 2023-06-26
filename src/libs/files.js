const fs = require("fs");
const path = require("path");

function obtenerArchivosDirectorio(rutaDirectorio) {
  const archivos = fs.readdirSync(rutaDirectorio);
  const archivosCompletos = archivos.map((archivo) => path.join(rutaDirectorio, archivo));
  return archivosCompletos;
}

function obtenerContenidoArchivo(rutaArchivo) {
  try {
    const contenido = fs.readFileSync(rutaArchivo, "utf8");
    return contenido;
  } catch (error) {
    console.error("Error al leer el archivo:", error);
    throw error;
  }
}

module.exports = {
  obtenerArchivosDirectorio,
  obtenerContenidoArchivo,
};
