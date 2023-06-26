const {
  obtenerArchivosDirectorio,
  obtenerContenidoArchivo,
} = require("./src/libs/files.js");

const { parserContent } = require("./src/libs/python-process/parser.js");

const archivosDirectorio = obtenerArchivosDirectorio("input");
const rutaArchivo = archivosDirectorio[0];
const contenido = obtenerContenidoArchivo(rutaArchivo);
parserContent(contenido);
