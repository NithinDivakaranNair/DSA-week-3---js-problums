class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.rigth = null;
    }
}
class BineryTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(val) {
        let newnode = new Node(val)
        if (this.isEmpty()) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }
    }

    insertNode(root, newnode) {
        if (root.value > newnode.value) {
            if (root.left === null) {
                root.left = newnode
            } else {
                this.insertNode(root.left, newnode)
            }

        } else {
            if (root.rigth === null) {
                root.rigth = newnode
            } else {
                this.insertNode(root.rigth, newnode)
            }
        }

    }

    search(root, val) {
        if (!root) {
            return false
        } else {
            if (root.value === val) {
                return true
            } else if (root.value > val) {
                return this.search(root.left, val)
            } else {
                return this.search(root.rigth, val)

            }
        }
    }
    PreOrder(root) {
        if (root) {
            console.log(root.value);
            this.PreOrder(root.left)
            this.PreOrder(root.rigth)
        }
    }
    InOrder(root) {
        if (root) {
            this.InOrder(root.left)
            console.log(root.value);
            this.InOrder(root.rigth)
        }
    }

    PostOrder(root) {
        if (root) {
            this.PostOrder(root.left)
            this.PostOrder(root.rigth)
            console.log(root.value);
        }
    }

LevelOrder(){
    //use the optimised queue implementation
    const queue=[];
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }if(curr.rigth){
            queue.push(curr.rigth)

        }
    }
}

}

const tree = new BineryTree();
// console.log(tree.isEmpty());
tree.insert(10)
tree.insert(6)

tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.isEmpty());
// console.log(tree.search(tree.root, 22));
// nods.PreOrder(nods.root)
// nods.InOrder(nods.root)
// nods.PostOrder(nods.root)
tree.PreOrder(tree.root) 