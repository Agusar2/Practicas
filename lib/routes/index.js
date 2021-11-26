import express from 'express';
import carreras from './carreras';
import roles from './roles';
import materias from './materias';
import cursos from './cursos';
import usuarios from './usuarios';


const router = express.Router();
router.use('/carreras', carreras);
router.use('/roles', roles);
router.use('/materias', materias);
router.use('/cursos', cursos);
router.use('/usuarios', usuarios);


export default router;
