import { Router } from 'express';
import Controller from '../controllers/TournamentController';

const TournamentController = new Controller();
const router = Router();

router
  .route('/')
    .get((req, res) => TournamentController.getAll(req, res));

router
  .route('/:id')
  .get((req, res) => TournamentController.getById(req, res));

export default router;
