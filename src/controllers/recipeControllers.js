
import recipes from '../data/recipes';

exports.index = (req, res) => {
  res.render('recipes/index', { recipes });
};
