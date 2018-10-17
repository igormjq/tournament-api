import { Router } from 'express';
import tournaments from './tournament';

const router = Router();

router.use('/tournaments', tournaments);

router.get('/', (req, res) => res.json({ detail: 'Tournaments API', status: 200}));

export default router;