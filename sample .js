class heap {
    constructor() {
        this.iteam = []
    }

    insert(val) {
        this.iteam.push(val)
        this.bubbleup()
    }
    bubbleup() {
        let idx = this.iteam.length - 1
        let element = this.iteam[idx]
        while (idx > 0) {
            let parentidx = Math.floor((idx - 1) / 2)
            let parentval = this.iteam[parentidx]
            if (parentval <= element) break;
            this.iteam[idx] = parentval;
            this.iteam[parentidx] = element
            idx = parentidx
        }
    }

    extractmin() {
        let min = this.iteam[0];
        let end = this.iteam.pop()
        if (this.iteam.length > 0) {
            this.iteam[0] = end
            this.sinkdown()
        }
        return min
    }

    sinkdown() {
        let idx = 0;
        let element = this.iteam[idx]
        let length = this.iteam.length;
        while (true) {
            let leftchildidx = 2 * idx + 1;
            let rightchildidx = 2 * idx + 2
            let leftval, rightval;
            let swap = null;
            if (leftchildidx < length) {
                leftval = this.iteam[leftchildidx]
                if (element > leftval) {
                    swap = leftchildidx
                }
            }
            if (rightchildidx < length) {
                rightval=this.iteam[rightchildidx]
            if((!swap&&element>rightval)||(swap&&leftval>rightval)){
                swap=rightchildidx
            }
        }
            if(!swap)break;
            this.iteam[idx]=this.iteam[swap]
            this.iteam[swap]=element
            idx=swap
        }
    }

}

function heapsort(arr) {
    let Heap=new heap()
    for(let val of arr){
        Heap.insert(val)
    }
    let sort=[]
    let count=0
    while(Heap.iteam.length){
        count++
        if(count<=3){
            sort.push(Heap.extractmin())

        }else {
            break
        }
       
    }
    return sort
}

console.log(heapsort([88,5,33,2,53]));