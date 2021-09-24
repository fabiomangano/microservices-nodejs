import express from 'express';
import apiAdapter from './apiAdapter';
import endpoints from '../../service-address.json';

const BASE_URL = endpoints['assets-service'];
const api = apiAdapter(BASE_URL);

const router = express.Router();

router.get('/api/v1/assets', (req, res) => {
  api.get(req.path, {
    method: 'GET',
    headers: {
      'X-Forwarded-For': '192.168.1.0'
    }}).then(resp => {
    res.send(resp.data);
  })
})

export default router;