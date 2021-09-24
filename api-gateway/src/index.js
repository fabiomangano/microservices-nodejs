import dotenv from 'dotenv';
import createApp  from './createApp';
import getServiceEndpoints from './utils/getServiceEndpoints';
import { getTrustedIps, job } from './cron/getTrustedIps';

dotenv.config();

const {
  SERVER_PORT,
  SERVER_URL,
} = process.env;

getServiceEndpoints();
getTrustedIps();

const app = createApp();
const PORT = SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`API Gateway listening at ${SERVER_URL}`);
});

job.start();

export default app;