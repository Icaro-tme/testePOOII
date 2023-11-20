import express from 'express';

import usuarioRoutes from './routes/usuarioRoutes';
import lanceRoutes from './routes/lanceRoutes';
import leilaoRoutes from './routes/leilaoRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/lance', lanceRoutes);
app.use('/leilao', leilaoRoutes);
app.use('/usuario', usuarioRoutes);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
