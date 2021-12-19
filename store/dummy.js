class DummyDB {
  constructor() {
    this.data = {
      numbers: Array.from({ length: 10 }).map((_val, index) => ++index),
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
