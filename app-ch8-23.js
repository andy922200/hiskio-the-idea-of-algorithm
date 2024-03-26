class HashTable {
    constructor(size) {
        this.size = size
        this.table = []

        for (let i = 0; i < this.size; i++) {
            this.table.push([])
        }
    }

    hashDivision(key) {
        return key % this.size
    }

    hashMulti(key) {
        const A = (Math.sqrt(5) - 1) / 2
        return Math.floor(this.size * ((key * A) % 1))
    }

    set(key, value) {
        const index = this.hashMulti(key)
        this.table[index].push({ key, value })
    }

    get(key){
        const index = this.hashMulti(key)
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key) {
                return this.table[index][i]
            }
        }
        return null
    }

    printAll(){
        console.log(this.table)
    }
}

const hashTable = new HashTable(6)
hashTable.set(11424, 'Mike')
hashTable.set(6254, 'James')
hashTable.set(4171, 'Drake')
hashTable.set(554, 'Kevin')

hashTable.printAll()

console.log(hashTable.get(11424))
console.log(hashTable.get(4171))
console.log(hashTable.get(8888))