import { Router } from 'express';
import { UsuarioController } from '../controllers/usuarioController';

const router = Router();
const pacienteController = new UsuarioController();

router.get('/', pacienteController.getAllUsuarios);
router.get('/:id', pacienteController.getUsuarioById);
router.post('/', pacienteController.createUsuario);
router.put('/:id', pacienteController.updateUsuario);
router.delete('/:id', pacienteController.deleteUsuario);


export default router;
