import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import recipeRoutes from './src/routes/recipeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/recipes', recipeRoutes);
app.listen(3000, () => console.log('Server running'));
