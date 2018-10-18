import { Router } from 'express';
import TournamentController from '../controllers/TournamentController';

const router = Router();

router.get('/', (req, res) => TournamentController.getAll(req, res));

router.get('/:id', (req, res) => TournamentController.getById(req, res));

export default router;
