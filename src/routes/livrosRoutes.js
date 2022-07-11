import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();
//Iniciada a rota pelo método do express, eu digo qual método essa rota vai ter. Nesse caso, é o método get
//Dentro do método, a gente coloca a rota e o que deve ser feito no método
//Nesse caso, a rota do método get vai executar o método listarLivros da classe LivroController
router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);
export default router;
