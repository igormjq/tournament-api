import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('GET to /tournaments');
});

export default router;
