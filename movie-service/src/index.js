import createApp from './createApp';
import dotenv from 'dotenv';

dotenv.config();

const {
  SERVER_PORT,
  SERVER_URL,
} = process.env;

const app = createApp();

const PORT = SERVER_PORT || 3003;

app.listen(PORT, () => {
  console.log(`Movie Service running on port ${SERVER_URL}`);
});

export default app;