import express from 'express';
import { newCreator,getAllCreators } from '../controllers/creatorController.js';

const router = express.Router();

router.post('/add-creator',newCreator)
router.get('/get-all-creators',getAllCreators)

export default router