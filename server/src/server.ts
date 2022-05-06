import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

/* Controle de segurança no back-end
Não permite que 'front-ends' inadequados acessam informações do back-end
Com o CORS podemos indicar quais endereços podem consumir o back-end */
app.use(cors());

/* Precisa vir antes da rota.
Verifica se no corpo da requisição está em formato JSON */
app.use(express.json()); // Middleware

app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!');
});
