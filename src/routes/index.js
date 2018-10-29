import { Router } from 'express';
import tournaments from './tournament';
import user from './user';

const router = Router();

router.use('/tournaments', tournaments);
router.use('/user', user);

router.get('/', (req, res) => res.json({ detail: 'Tournaments API', status: 200}));

export default router;