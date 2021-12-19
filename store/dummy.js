export default class DummyDB {
  constructor(extraData = {}) {
    this.data = {
      numbers: Array.from({ length: 10 }).map((_value, index) => ++index),
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
