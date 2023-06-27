class KeyCounter {
  constructor() {
    this.occurrences = {};
  }

  addOcurrence(key) {
    if (key in this.occurrences) {
      this.occurrences[key]++;
    } else {
      this.occurrences[key] = 1;
    }
  }

  getOccurrences(key) {
    return this.occurrences[key] || 0;
  }
}

module.exports = KeyCounter;
