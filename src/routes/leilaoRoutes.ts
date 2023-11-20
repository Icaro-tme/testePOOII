import { Router } from 'express';
import { LeilaoController } from '../controllers/leilaoController';

const router = Router();
const consultaController = new LeilaoController();

router.get('/', consultaController.getAllLeiloes);
router.get('/:id', consultaController.getLeilaoById);
router.post('/', consultaController.createLeilao);
router.put('/:id', consultaController.updateLeilao);
router.delete('/:id', consultaController.deleteLeilao);

export default router;
