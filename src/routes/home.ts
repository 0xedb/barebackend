import {Router} from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.send('home!!!');
});

export default router;
