import { Router } from 'express';

import send from '../../../network/response.js';
import { list, create } from './controller.js';

const router = Router();

router.get('/', async (_request, response) => {
  await send(response, async () => list());
});

router.post('/', async ({ body }, response) => {
  await send(response, async () => create(body));
});

export default router;
