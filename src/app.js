//App é o módulo que possui as rotas
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("CONEXÃO COM O BANCO FEITA COM SUCESSO!");
});
const app = express();
//-------APP.USE---------------------
app.use(express.json()); //Recurso do express que permite interpretar o que tá chegando via POST. Caso contrário, o post vai subir um null ao passar um JSON para a API
routes(app);

export default app;
