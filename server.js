//Criar um servidor local. Esse módulo server.js server apenas para inicializar o servidor
import app from "./src/app.js";
const port = process.env.PORT || 4000;
/* As vezes vc quer subir o projeto pra um servidor que não é local. A porta que esse servidor vai ouvir pode ser diferente, por isso é uma boa prática fazer essa diferenciação da porta */

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
