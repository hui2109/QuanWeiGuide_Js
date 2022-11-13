class Histogram {
    constructor() {
        this.map = new Map();
    }

    count(key) {
        return this.map.get(key) || 0;
    }

    has(key) {
        return this.count(key) > 0;
    }

    get size() {
        return this.map.size;
    }

    add(key) {
        return this.map.set(key, this.count(key) + 1);
    }

    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1)
        }
    }

    [Symbol.iterator]() {
        return this.map.keys();
    }

    keys() {
        return this.map.keys();
    }

    values() {
        return this.map.values();
    }

    entries() {
        return this.map.entries();
    }
}

h=new Histogram();
h.add('k1');
h.add('k1');
console.log(h);
h.delete('k1');
console.log(h.entries());
