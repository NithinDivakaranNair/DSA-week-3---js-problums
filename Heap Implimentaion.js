class Heap {
    constructor() {
        this.values = [50, 40, 30, 38, 28, 15, 23]
    }
    insert(element) {
        this.values.push(element)
        this.bubbleup()
    }
    bubbleup() {
        let currentid = this.values.length - 1
        let element = this.values[currentid]
        while (currentid > 0) {
            let parentid = Math.floor((currentid - 1) / 2)
            let parentval = this.values[parentid]
            if (element <= parentval) break
            this.values[parentid] = element
            this.values[currentid] = parentval 
            currentid = parentid
        }
    }

    ExtractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkdown();
        }
        return max

    }
    sinkdown() {
        let idx = 0;
        const length = this.values.length;
        let element = this.values[0]
        while (true) {
            let leftchildidx = 2 * idx + 1
            let rightchildidx = 2 * idx + 2
            let leftchild, rigthchild
            let swap = null;
            if (leftchildidx < length) {
                leftchild = this.values[leftchildidx];
                if (leftchild > element) {
                    swap = leftchildidx
                }
            }
            if (rightchildidx < length) {
                rigthchild = this.values[rightchildidx]
                if ((swap === null && rigthchild > element) || (swap !== null && rigthchild > leftchild)) {
                    swap = rightchildidx
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element
            idx = swap
        }
    }
}





let list = new Heap()

list.ExtractMax()
console.log(list.ExtractMax());

console.log(list.values);