

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
class MyHashMap {
    constructor() {
        this.size = 1000; // Choose a size for the hash table
        this.table = new Array(this.size);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    put(key, value) {
        const index = this.hash(key);

        if (this.table[index] === undefined) {
            this.table[index] = [];
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);

        if (this.table[index] !== undefined) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }

        return -1;
    }

    remove(key) {
        const index = this.hash(key);

        if (this.table[index] !== undefined) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    return;
                }
            }
        }
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */