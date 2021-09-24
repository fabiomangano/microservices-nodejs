import createApp from './createApp';
import dotenv from 'dotenv';

dotenv.config();

const {
  SERVER_PORT,
  SERVER_URL,
} = process.env;

const app = createApp();

const PORT = SERVER_PORT || 3008;

app.listen(PORT, () => {
  console.log(`Email Service running on port ${SERVER_URL}`);
});

export default app;