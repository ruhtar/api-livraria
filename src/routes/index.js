//Esse arquivo recebe todas as rotas da aplicação pq facilita na organização e na exportação dessas rotas
import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de Node" });
  });

  app.use(express.json(), livros, autores);
};

export default routes;
