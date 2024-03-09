class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length++
    }

    // remove the last node
    pop(){
        if(!this.head){
            return null
        }else if(this.length === 1){
            const lastNode = this.head
            this.head = null
            this.length--
            return lastNode
        }else{
            let currentNode = this.head

            for(let i=0; i<this.length-2; i++){
                currentNode = currentNode.next
            }

            const lastNode = currentNode.next
            currentNode.next = null
            this.length--
            return lastNode
        }
    }

    // remove the first node
    shift(){
        if(!this.head){
            return null
        }else if(this.length === 1){
            const shiftedNode = this.head
            this.head = null
            this.length--
            return shiftedNode
        }else{
            const shiftedNode = this.head
            this.head = shiftedNode.next
            this.length--
            shiftedNode.next = null
            return shiftedNode
        }
    }

    // add a node to the beginning of the list
    unshift(value){
        let newNode = new Node(value)

        !this.head
            ? this.head = newNode
            : [this.head, newNode.next] = [newNode, this.head]

        this.length++
    }

    // insert a node at a specific position
    insertAt(index, value){
        if (index < 0 || index > this.length) return null
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)

        let currentNode = this.head
        let newNode = new Node(value)

        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next
        }

        newNode.next = currentNode.next
        currentNode.next = newNode
        this.length++
        return
    }

    // delete a node at a specific position
    deleteAt(index){
        if (index < 0 || index > this.length) return null
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()

        let currentNode = this.head

        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next
        }

        const removedNode = currentNode.next
        currentNode.next = currentNode.next.next

        this.length--
        removedNode.next = null
        return removedNode
    }

    printAll() {
        if (this.length === 0) {
            console.log('Nothing in the linked list.')
            return
        }
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.shift()
linkedList.push('Andy')
linkedList.push('Bob')
linkedList.push('Cathy')
linkedList.push('David')
linkedList.push('Eva')
const removedNode = linkedList.pop()
const shiftNode = linkedList.shift()
console.log('removedNode:', removedNode)
console.log('shiftNode:', shiftNode)
linkedList.unshift('Zoe')
console.log('length:', linkedList.length)
linkedList.printAll()

console.log('-------------------')
const linkedList2 = new LinkedList()
linkedList2.push('Alex')
linkedList2.push('Ben')
linkedList2.push('Colin')
linkedList2.push('Dylan')
linkedList2.insertAt(3, 'Eva')
const deletedAtNode = linkedList2.deleteAt(1)
console.log('deletedAtNode:', deletedAtNode)
console.log('length:', linkedList2.length)
linkedList2.printAll()