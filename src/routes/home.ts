import {Router} from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.send('welcome!!!');
});

export default router;
