import recipes from '../data/recipes.js'; 

export function index(req, res) {
  res.render('recipes/index', { recipes });
}
