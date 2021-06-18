// 선형 탐사 해싱 기법

class LinearHash {
    constructor (size) {
        this.size = size;
        this.keys = this.inItArray(size);
        this.values = this.inItArray(size);
        this.limit = 0;
    }

    Put = (key, value) => {
        if (this.limit >= this.size) {
            throw "hash table is full..!";
        }

        let hashedIdx = this.hash(key);

        while (this.keys[hashedIdx] != null) {
            hashedIdx++;
            hashedIdx = hashedIdx % this.size;
        }

        this.keys[hashedIdx] = key;
        this.values[hashedIdx] = value;
        this.limit++;
    }

    Get = (key) => {
        let hashedIdx = this.hash(key);

        while (this.keys[hashedIdx] != key) {
            hashedIdx++;
            hashedIdx = hashedIdx % this.size;
        }

        return this.values[hashedIdx];
    }

    hash = (key) => {
        // 정수인지 확인
        if (!Number.isInteger(key)) {
            throw "must be int..!"
        }
        return key % this.size;
    }

    inItArray = (size) => {
        let array = [];

        for (let i = 0; i < size; i++) {
            array.push(null);
        }

        return array;
    }
}

let example = new LinearHash(13);
example.Put(7, "hi");
let tempArr = example.Get(7);
console.log(tempArr);