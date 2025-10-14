import { Router } from 'express';
import {
  listarPecas,
  buscarPeca,
  criarPeca,
  atualizarPeca,
  deletarPeca
} from '../controllers/pecaController';
import { authMiddleware } from '../middlewares/authMiddleware'; 

const router = Router();

//authMiddleware nas rotas que devem ser protegidas
router.get('/pecas', authMiddleware, listarPecas);
router.get('/pecas/:id', authMiddleware, buscarPeca);
router.post('/pecas', authMiddleware, criarPeca);
router.put('/pecas/:id', authMiddleware, atualizarPeca);
router.delete('/pecas/:id', authMiddleware, deletarPeca);

export default router;
