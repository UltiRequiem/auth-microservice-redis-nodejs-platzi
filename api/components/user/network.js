import { Router } from 'express';

import send from '../../../network/response.js';
import UserController from './controller.js';

const router = Router();

router.get('/', async (_request, response) => {
  await send(response, async () => UserController.list());
});

router.get('/:id', async ({ params: { id } }, response) => {
  await send(response, async () => UserController.get(id));
});

router.post('/', async ({ body }, response) => {
  await send(response, async () => UserController.create(body));
});

export default router;
