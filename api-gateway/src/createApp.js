import express from 'express';
import router from './routers/router';
import bodyParser from 'body-parser';
import cors from 'cors';

import checkIpAddress from './middlewares/checkIpAddress';

const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(checkIpAddress);

  app.use('/',router);
  return app;
};

export default createApp;