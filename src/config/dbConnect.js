// Seguindo as boas práticas, deve-se fazer um módulo para fazer a conexão com o banco de dados.
import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://alura:123@cluster0.tw7jhvm.mongodb.net/livraria"
);
let db = mongoose.connection;
export default db;
