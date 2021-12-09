const htmlTemplate = `
  <div>
    <input id="addTask" type="text" name="task" placeholder="Add to your list...">
    <button id="btnaddTask">
      <i class="fas fa-level-down-alt fa-rotate-90 hidden-mobile"></i>
      <i class="fas fa-plus shown-mobile"></i>
    </button>
  </div>
  <div>
      <ul id="task-list"></ul>
  </div>`;

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }

  getAll() {
    console.log(this.store);
  }
}

export { htmlTemplate, LocalStorageMock };