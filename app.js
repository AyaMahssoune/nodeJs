const http = require("http");
const fs = require("fs");

const serveur = http.createServer();
const pageIndex = fs.readFileSync(__dirname + "/index.html", "utf-8");
const pageIndexPersonnalisee = pageIndex.replace("{{ name }}", "Amine");

serveur.on("request", (request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.write(pageIndexPersonnalisee);
  response.end();
});

// localhost:3030
serveur.listen(3030);
