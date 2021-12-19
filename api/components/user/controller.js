import { CustomDummyDB as DB } from '../../../store/index.js';

export async function list() {
  return DB.get('numbers');
}

export async function create(data) {
  return DB.set('numbers', data);
}
