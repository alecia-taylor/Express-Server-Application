import express from 'express';
import * as recipeController from '../controllers/recipeControllers.js';

const router = express.Router();

// GET all recipes
router.get('/', recipeController.getAllRecipes);

// GET a single recipe by ID
router.get('/:id', recipeController.getRecipeById);

// POST (create) a new recipe
router.post('/', recipeController.createRecipe);

// PUT (update) an existing recipe
router.put('/:id', recipeController.updateRecipe);

// DELETE a recipe
router.delete('/:id', recipeController.deleteRecipe);

export default router;
