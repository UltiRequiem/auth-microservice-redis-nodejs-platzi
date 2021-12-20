export class DummyDB {
  constructor(extraData = {}) {
    this.data = {
      numbers: Array.from({ length: 10 }).map((_value, index) => index + 1),
      ...extraData,
    };
  }

  async get(key) {
    return this.data[key];
  }

  async set(key, value) {
    this.data[key] = value;
    return this.data[key];
  }
}

export default new DummyDB();
