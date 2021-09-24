import createApp from './createApp';
import dotenv from 'dotenv';

import { getTrustedIps, job } from './cron/getTrustedIps';

dotenv.config();

const {
  SERVER_PORT,
  SERVER_URL,
} = process.env;

getTrustedIps();

const app = createApp();

const PORT = SERVER_PORT || 3002;

app.listen(PORT, () => {
  console.log(`Assets service running on port ${SERVER_URL}`);
});

job.start();

export default app;