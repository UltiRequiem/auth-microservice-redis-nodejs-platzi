/** @template T */
export class DummyDB {
  constructor(extraData = {}) {
    this.data = {
      numbers: Array.from({ length: 10 }).map((_value, index) => index + 1),
      ...extraData,
      user: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
    };
  }

  /**
   * @param {string} key
   * @returns  {Promise<T[]>}
   */
  async list(key) {
    return this.data[key];
  }

  /**
   * @param {string} table
   * @param {string} key
   * @returns {Promise<T>}
   */
  async get(table, key) {
    const col = await this.list(table);
    // eslint-disable-next-line eqeqeq
    return col.find((item) => item.id == key);
  }

  /**
   * @param {string} key
   * @param {T} value
   * @returns {Promise<T>}
   */
  async set(key, value) {
    this.data[key] = value;
    return this.data[key];
  }

  /**
   * @param {string} table
   * @param {number} id
   * @returns {Promise<boolean>}
   */
  async remove(table, id) {
    const col = await this.list(table);
    const index = col.findIndex((item) => item.id === id);

    if (index === -1) return false;

    col.splice(index, 1);

    return true;
  }

  /**
   * @param {string} key
   * @param {T} value
   * @returns {Promise<T>}
   */
  async upsert(tabla, data) {
    if (!this.data[tabla]) this.data[tabla] = [];

    this.data[tabla].push(data);

    return this.data[tabla];
  }

  async query(tabla, q) {
    const col = await this.list(tabla);
    const keys = Object.keys(q);
    const key = keys[0];
    return col.find((item) => item[key === q[key]] === q) || undefined;
  }
}

export default new DummyDB();
