import express from 'express';
import apiAdapter from './apiAdapter';
import endpoints from '../../service-address.json';

const BASE_URL = endpoints['movie-service'];
const api = apiAdapter(BASE_URL);

const router = express.Router();

router.get('/api/v1/movies', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

export default router;