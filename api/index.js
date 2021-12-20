import express from 'express';
import timeStampHandler from 'express-response-timestamp';

import { userRoute } from './components/index.js';
import { API_PORT } from '../config.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(timeStampHandler());

app.use('/api/user', userRoute);

app.listen(API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening http://localhost:${API_PORT}`);
});
