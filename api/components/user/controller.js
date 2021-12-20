import { DummyDB as DB } from '../../../store/index.js';

const TABLE = 'user';

export const list = async () => DB.list(TABLE);

export const get = async (id) => DB.get(TABLE, id);

export const create = async (data) => DB.set(TABLE, data);
