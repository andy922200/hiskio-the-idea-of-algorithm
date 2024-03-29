class HashTable {
    constructor(size) {
        this.size = size
        this.table = []

        for (let i = 0; i < this.size; i++) {
            this.table.push([])
        }
    }

    parse(key){
        let result = 0
        for(let i=0; i<key.length; i++){
            result += key.charCodeAt(i)
        }
        return result
    }

    hashDivision(key) {
        return key % this.size
    }

    hashMulti(key) {
        let parsedKey = key

        if (typeof key === 'string') {
            parsedKey = this.parse(key)
        }

        const A = (Math.sqrt(5) - 1) / 2
        return Math.floor(this.size * ((parsedKey * A) % 1))
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
hashTable.set('white', '#FFFFFF')
hashTable.set('magenta', '#FF00FF')
hashTable.set('red', '#FF0000')

hashTable.printAll()

console.log(hashTable.get(11424))
console.log(hashTable.get(4171))
console.log(hashTable.get('red'))
console.log(hashTable.get('red').value)