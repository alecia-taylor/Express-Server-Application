import express from 'express';
import * as recipeController from '../controllers/recipeController.js';

const router = express.Router();
router.get('/', recipeController.index);
export default router;
