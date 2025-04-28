import express from 'express';
import mongoose from 'mongoose'; 
import path from 'path';
import { fileURLToPath } from 'url';
import * as commentRoutes from './src/routes/commentRoutes.js';
import * as recipeRoutes from './src/routes/recipeRoutes.js';
import { logger } from './src/middleware/logger.js';

console.log(commentRoutes);
console.log(recipeRoutes);
const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/express_app_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/comments', commentRoutes);

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).send('Something broke!');
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
