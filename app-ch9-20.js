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

    dequeue(){
        if (this.values.length === 0) return null;
        if (this.values.length === 1) {
            const removedNode = this.values.pop();
            return removedNode;
        }

        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];

        const removedNode = this.values.pop();
        this.maxHeapify(0)

        return removedNode;
    }

    maxHeapify(i) {
        let largestIndex = undefined;
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        const length = this.values.length;
        
        left <= length - 1 && this.values[left].priority > this.values[i].priority
            ? largestIndex = left
            : largestIndex = i;

        if (right <= length - 1 && this.values[right].priority > this.values[largestIndex].priority) {
            largestIndex = right;
        }

        if (largestIndex !== i) {
            [this.values[i], this.values[largestIndex]] = [this.values[largestIndex], this.values[i]];
            this.maxHeapify(largestIndex);
        }
    }
}

const pq1 = new PriorityQueue();
pq1.enqueue('Eat breakfast', 5);
pq1.enqueue('Learn Java', 2);
pq1.enqueue('Learn JavaScript', 7);
pq1.enqueue('Buy Textbooks', 8);
pq1.enqueue('Watch Netflix', 12);
pq1.enqueue('Pay Bills', 15);

console.log(pq1)

while(pq1.values.length >= 1){
    const { value, priority } = pq1.dequeue();
    console.log(value + ' - Priority: ' + priority);
}