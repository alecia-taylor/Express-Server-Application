import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  recipe_id: mongoose.Schema.Types.ObjectId,  // Reference to a Recipe
  comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment; 
