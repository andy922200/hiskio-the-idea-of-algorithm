class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
        this.length = 0
    }

    // get the node's value at a specific position
    get(index){
        if(index < 0 || index >= this.length) return null

        let currentNode = this.head
        for(let i=0; i<index; i++){
            currentNode = currentNode.next
        }

        return currentNode.value
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

const stack = new Stack()
stack.push('Andy')
stack.push('Bob')
stack.pop()
stack.push('Cathy')
stack.push('David')
stack.push('Eva')
stack.printAll()
