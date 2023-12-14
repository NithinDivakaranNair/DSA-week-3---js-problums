class Node {
    constructor(val, priority) {
        this.val = val
        this.priorty = priority

    }
}
class priorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, prio) {
        let newnode = new Node(val, prio)
        this.values.push(newnode)
        this.bubbleup()
    }
    bubbleup() {
        let idx = this.values.length - 1
        let element = this.values[idx];

        while (idx > 0) {
            let parentidx = Math.floor((idx - 1) / 2)
            let parentelement = this.values[parentidx]
            if (parentelement.priority >= element.priority) break;
            this.values[parentidx] = element
            this.values[idx] = parentelement
            idx = parentidx

        }
    }


    dequeue() {
        let max = this.values[0]
        let min = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = min;
            this.sinkDown();
        }
        return max
    }
    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0]
        while (true) {
            let leftchildidx = id * 2 + 1
            let rightchildidx = id * 2 + 2
            let leftchildval, rightchildval;
            let swap = null
            if (leftchildidx < length) {
                leftchildval = this.values[leftchildidx]
                if (leftchildval.priority > element.priority) {
                    swap = leftchildidx;
                }
            }
            if (rightchildidx < length) {
                rightchildval = this.values(rightchildidx)
                if ((swap === null && rightchildval.priority > element.priority) || (swap !== null && rightchildval.priority > leftchildval.priority)) {
                    swap = rightchildidx;

                }
            }
            if (swap === null)break;
                this.values[idx] = this.values[swap]
                this.values[swap] = element;
                idx = swap;
            }

        }
    }

const  PQ=new priorityQueue();
PQ.enqueue("hwlo",5);
PQ.enqueue("hlo",3);
PQ.enqueue("hw",6 );
console.log(PQ.values);
