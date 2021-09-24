import express from 'express';
import controllers from './controllers'

const router = express.Router();

router.get('/', controllers.getAllMovies);
router.get('/:id', controllers.getMovieById);
  
export default router;

