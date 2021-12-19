import express from 'express';

import { userRoute } from './components/index.js';
import { API_PORT } from '../config.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRoute);

app.listen(API_PORT, () => {
  console.log(`Server listening http://localhost:${API_PORT}`);
});
