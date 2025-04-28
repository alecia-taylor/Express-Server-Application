import express from 'express';
import * as commentController from '../controllers/commentController.js';

const router = express.Router();

// GET all comments
router.get('/', commentController.getAllComments);

// POST (create) a new comment
router.post('/', commentController.createComment);

// DELETE a comment
router.delete('/:id', commentController.deleteComment);

export default router;
