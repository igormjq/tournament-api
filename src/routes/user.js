import { Router } from 'express';
import Controller from '../controllers/UserController';

const UserController = new Controller();
const router = Router();

router.post('/login', (req, res) => UserController.login(req, res));

export default router;
