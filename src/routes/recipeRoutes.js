import express from 'express';
import * as recipeControllers from '../controllers/recipeControllers.js';

const router = express.Router();
router.get('/', recipeControllers.index);
export default router;
