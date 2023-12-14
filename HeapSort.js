class MinHeap {
    constructor() {
        this.values = []
    }


    insert(element) {
        this.values.push(element)
        this.bubbleup()
    }
    bubbleup() {
        let idx = this.values.length - 1
        let element = this.values[idx]
        while (idx > 0) {
            let parentidx = Math.floor((idx - 1) / 2)
            let parentval = this.values[parentidx]
            if (element >= parentval) break
            this.values[parentidx] = element;
            this.values[idx] = parentval
            idx = parentidx
        }
    }

    ExtractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkdown();
        }
        return min
    }

    sinkdown() {
        let idx = 0;
        const length = this.values.length;
        let element = this.values[0]
        while (true) {
            let leftchildidx = 2 * idx + 1
            let rightchildidx = 2 * idx + 2
            let leftchildval, rightchildval;
            let swap = null
            if (leftchildidx < length) {
                leftchildval = this.values[leftchildidx]
                if (leftchildval < element) {
                    swap = leftchildidx
                }
            }
            if (rightchildidx > length) {
                leftchildval = this.values[rightchildidx]
                if ((swap !== null && rightchildval < element) || (swap === null && leftchildval > rightchildval)) {
                    swap = rightchildidx
                }
            }
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

}
function heapsort(arr) {
    let minheap = new MinHeap()
    for (let val of arr) {
        minheap.insert(val)
    }
    let sort = []
    while (minheap.values.length) {
        sort.push(minheap.ExtractMin())
    }
    return sort
}

console.log(heapsort([55, 3, 66, 6, 7, 33]));