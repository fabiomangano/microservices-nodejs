import express from 'express';
import apiAdapter from './apiAdapter';
import endpoints from '../../service-address.json';

const BASE_URL = endpoints['auth-service'];
const api = apiAdapter(BASE_URL);

const router = express.Router();

router.post('/api/v1/login', (req, res) => {
   api.post(req.path, req.body, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    res.send(resp.data);
  })
})

export default router;