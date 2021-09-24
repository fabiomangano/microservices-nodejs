import express from 'express';
import controllers from './controllers'

const router = express.Router();

router.get('/service-register', controllers.getServiceEndpoints);
  
export default router;

