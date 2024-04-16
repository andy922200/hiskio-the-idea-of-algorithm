class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        const newNode = new Node(value, priority);

        if(this.values.length === 0){
            this.values.push(newNode);
            return true
        }

        // Add the new node to the end of the array
        this.values.push(newNode);

        let newIndex = this.values.length - 1;
        let parentIndex = Math.floor((newIndex - 1) / 2);

        while(parentIndex >= 0 && this.values[newIndex].priority > this.values[parentIndex].priority){
            // Swap the new node with the parent node
            [this.values[newIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[newIndex]];

            // update the new index and parent index
            newIndex = parentIndex;
            parentIndex = Math.floor((newIndex - 1) / 2);
        }
    }
}

const pq1 = new PriorityQueue();
pq1.enqueue('Eat breakfast', 5);
pq1.enqueue('Learn Java', 2);
pq1.enqueue('Learn JavaScript', 7);

console.log(pq1)