import { Router } from 'express';
import { LanceController } from '../controllers/lanceController';

const router = Router();
const secretariaController = new LanceController();

router.get('/', secretariaController.getAllLances);
router.get('/:id', secretariaController.getLanceById);
router.post('/', secretariaController.createLance);
router.put('/:id', secretariaController.updateLance);
router.delete('/:id', secretariaController.deleteLance);

export default router;
