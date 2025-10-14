import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pecaRoutes from './routes/pecaRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json()); 

// Rotas 
app.use('/api', pecaRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Acompanhamento de Hardware' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
