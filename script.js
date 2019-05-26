class MyMap {
  constructor() {
    this.map = [];
  }
  set(key, value) {
    this.map.push([key, value]);
  }
  get(key) {
    let mapItem = this.map.find(mapItem => mapItem[0] === key);
    return mapItem && mapItem[1];
  }
  delete(key) {
    let i = this.map.findIndex(mapItem => mapItem[0] === key);
    
    if (i !== -1) {
      this.map.splice(i, 1);
    }
  }
  get size() {
    return this.map.length;
  }
  clear() {
    this.map.splice(0);
  }
  forEach(f) {
    this.map.forEach(f);
  }
}
