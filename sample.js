class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}

class bst {
    constructor() {
        this.root = null
    }



    insert(val) {
        var newnode = new Node(val)
        if (!this.root) {
            this.root = newnode;
        } else {
            this.insertval(this.root, newnode)
        }
    }

    insertval(root, newnode) {
        if (root.val > newnode.val) {
            if (root.left === null) {
                root.left = newnode
            } else {
                this.insertval(root.left, newnode)
            }
        } else {
            if (root.right === null) {
                root.right = newnode
            } else {
                this.insertval(root.right, newnode)
            }
        }
    }


    contain(val) {
        if (this.root === null) return false
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    //level order
    BFS() {
        let result = []
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift();
            //    console.log(current.val);
            result.push(current.val)
            if (current.left) {
                queue.push(current.left)

            } if (current.right) {
                queue.push(current.right)
            }
        }
        return result

    }

    Preorder() {
        var result = [];
        function travesel(root) {
            result.push(root.val)
            if (root.left) travesel(root.left)

            if (root.right) travesel(root.right)



        }
        travesel(this.root)
        return result
    }

    inorder() {
        var result = [];
        function travesel(root) {
            if (root.left) {
                travesel(root.left)
            }
            result.push(root.val)
            if (root.right) {
                travesel(root.right)
            }
        }
        travesel(this.root)
        return result
    }

    postorder() {
        var result = [];
        function travesel(root) {
            if (root.left) {
                travesel(root.left)
            }

            if (root.right) {
                travesel(root.right)
            }
            result.push(root.val)
        }
        travesel(this.root)
        return result
    }

    min(root) {
        if (!root.left) {
            return root.val
        } else {
            return this.min(root.left)
        }


    }

    maxm(root) {
        if (!root.right) {
            return root.val
        } else {
            return this.maxm(root.right)
        }
    }



    Delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.val) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.val) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            else if (!root.right) {
                return root.left
            }

            root.val = this.min(root.right)
            root.right = this.deleteNode(root.right, root.val)
        }

        return root


    }


}

let tree = new bst()

tree.insert(10)
tree.insert(9)
tree.insert(16)
tree.insert(15)
tree.insert(3)
tree.insert(20)
console.log(tree.postorder());
tree.Delete(16)
console.log(tree.postorder());
// console.log(tree.contain(6));
// console.log(tree.BFS())
// console.log(tree.Preorder())
// console.log(tree.inorder())
// console.log(tree.postorder());
// console.log(tree.maxm(tree.root));
// tree.BFS()