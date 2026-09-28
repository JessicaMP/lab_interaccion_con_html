const fs = require("fs");

const archivos = fs
  .readdirSync("./Pictures")
  .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));

fs.writeFileSync("images.js", `const imagenes = ${JSON.stringify(archivos)};`);