import { Router } from 'express';
import { registrar, login, verificarToken } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/registrar', registrar);
router.post('/login', login);
router.get('/verificar', authMiddleware, verificarToken);

export default router;
