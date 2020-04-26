const path = require("path");
const express = require("express");
const app = express();
// SE LE DICE AL SERVIDOR QUE ME CREE UNA CARPETA Y ALMACENE LOS ESTILOS
app.use("/cssFiles", express.static(__dirname + "/public/style"));
// SE LE DICE AL SERVIDOR QUE ME CREE UNA CARPETA Y ALMACENE LOS SCRIPT
app.use("/jsFiles", express.static(__dirname + "/public/js"));
// SE LE DICE AL SERVIDOR QUE ME CREE UNA CARPETA Y ALMACENE LOS html
app.use("/htmlFiles", express.static(__dirname + "/views"));
// SE ACCEDE AL HTML
app.get("/", function (req, resp) {
  resp.sendfile("index.html", { root: path.join(__dirname, "./views") });
});
app.listen(4000, function () {
  console.log("listing port 4000");
});
