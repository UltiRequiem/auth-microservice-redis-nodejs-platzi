import { nanoid } from 'nanoid';
import auth from '../auth/index.js';

import { DummyDB as DB } from '../../../store/index.js';

/** @template T */
class UserController {
  constructor(store = DB) {
    this.table = 'user';
    this.store = store;
  }

  async upsert({
    id, username, password, name,
  }) {
    if (password || username) {
      await auth.upsert({ id, username, password });
    }

    this.store.upsert(this.table, {
      i: id || nanoid(),
      username,
      password,
      name,
    });
  }

  async list() {
    return this.store.list(this.table);
  }

  /**
   * @param {string} id
   * @returns {Promise<T>}
   * @memberof UserController
   */
  async get(id) {
    return this.store.get(this.table, id);
  }

  async create(data) {
    return this.store.set(this.table, data);
  }
}

export default new UserController();
