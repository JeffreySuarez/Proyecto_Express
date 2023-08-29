const express = require("express"); //servidor

const cors = require("cors"); //comunicacion back y front

const app = express();

app.use(cors()); // los archivos se vean desde back
app.use(express.json()); //se vean en formato json
//el navegador nos envia en stream y lo que nos envie lo convierta json
app.use("/", require("../routes/userRoutes"));
app.use("/otrocompany", require("../routes/companyRoutes"));

app.listen(5000, () => {
  console.log(`use port 5000`);
});

module.exports = app; //exportar esta app para que lo vean otros archivos
