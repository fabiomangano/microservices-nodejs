import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes'

const createApp = () => {
    const app = express();
    
    app.use(cors());
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
  
    app.use('/api/v1/email', router);

    return app;
};

export default createApp;














