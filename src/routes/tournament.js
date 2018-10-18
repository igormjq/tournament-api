import { Router } from 'express';
import Controller from '../controllers/TournamentController';

const router = Router();
const TournamentController = new Controller();

router.get('/', (req, res) => TournamentController.getAll(req, res));

router.get('/:id', (req, res) => TournamentController.getById(req, res));

export default router;
