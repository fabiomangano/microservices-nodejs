import express from 'express';
import controllers from './controllers'

const router = express.Router();

router.get('/trusted-ip-register', controllers.getTrustedIps);
  
export default router;

