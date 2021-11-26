import express from 'express';

import { create, index, show, ListByRol, update } from '../controllers/usuario_controller';
import { verificarAutenticacion, withErrorHandling } from './utils';

const router = express.Router();

router.get('/ListByRol/:id_rol', ListByRol, verificarAutenticacion);
router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));
export default router;