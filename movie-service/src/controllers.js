import movies from '../data.json';
import utils from './utils';

export default {
  getAllMovies: (req, res) => {
    res.status(200).send(movies);
  },
  getMovieById: (req, res) => {
    const movie = utils.findById(movies, req.params.id);
    res.status(200).send(movie);
  }
};







