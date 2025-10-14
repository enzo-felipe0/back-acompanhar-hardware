import { Router } from 'express';
import {
  listarPecas,
  buscarPeca,
  criarPeca,
  atualizarPeca,
  deletarPeca
} from '../controllers/pecaController';

const router = Router();

router.get('/pecas', listarPecas);
router.get('/pecas/:id', buscarPeca);
router.post('/pecas', criarPeca);
router.put('/pecas/:id', atualizarPeca);
router.delete('/pecas/:id', deletarPeca);

export default router;
