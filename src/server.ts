import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pecaRoutes from './routes/pecaRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3333; 
const HOST = '0.0.0.0';

// Middlewares
app.use(cors({
  origin: [
    'http://localhost:3000', // desenvolvimento
    'https://front-acompanhar-hardware.vercel.app', // produção
    'https://vercel.com/enzo-felipe0s-projects/front-acompanhar-hardware/5rPSbCwJsTPck7nypGKR4wSqQg2U',
    'https://front-acompanhar-hardware-git-main-enzo-felipe0s-projects.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Middleware de debug (opcional)
app.use((req, res, next) => {
  console.log('📥 Request recebido:');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  next();
});

// Rotas
app.use('/api', pecaRoutes);
app.use('/api/auth', authRoutes); 

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Acompanhamento de Hardware' });
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor rodando em:`);
  console.log(`   Local:   http://localhost:${PORT}`);
  console.log(`   Network: http://SEU_IP:${PORT}`);
  console.log(`\n💡 Use o IP da rede para acessar do celular`);
});
