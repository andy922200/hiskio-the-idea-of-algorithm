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
linkedList.push('Andy')
linkedList.push('Bob')
linkedList.push('Cathy')
linkedList.push('David')
linkedList.printAll()
console.log('length:', linkedList.length)