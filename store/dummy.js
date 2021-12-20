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

  async list(key) {
    return this.data[key];
  }

  async get(table, key) {
    const col = await this.list(table);
    return col.find((item) => item.id === Number.parseInt(key, 10));
  }

  async set(key, value) {
    this.data[key] = value;
    return this.data[key];
  }

  async remove(table, id) {
    const col = await this.list(table);
    const index = col.findIndex((item) => item.id === id);

    if (index === -1) return false;

    col.splice(index, 1);

    return true;
  }
}

export default new DummyDB();
