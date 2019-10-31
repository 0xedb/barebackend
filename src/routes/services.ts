import {Router} from 'express';
import fundasc from './fundasc';

const router = Router();

router.use('/fundasc', fundasc); 

export default router;
