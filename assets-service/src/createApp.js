import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import checkIpAddress from './middlewares/checkIpAddress';

import router from './routes'

const createApp = () => {
    const app = express();
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: true }));
  
    app.use(checkIpAddress);
    app.use('/api/v1/assets', router);

    return app;
};

export default createApp;














