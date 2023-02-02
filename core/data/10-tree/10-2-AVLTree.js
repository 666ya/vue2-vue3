class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.root = null
        this.compareFn = compareFn
    }
    inert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }
    search(key) {
        return this.searchNode(this.root, key)
    }
    min() {
        return this.minNode(this.root)
    }
    max() {
        return this.maxNode(this.root)
    }
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    // private
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    removeNode(node, key) {
        if (node == null) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        }
        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if (node.left == null && node.right == null) {
                node = null
                return node
            }
            if (node.left == null) {
                node = node.right
                return node
            } else if (node.right == null) {
                node = node.left
                return node
            }

            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }
    searchNode(node, key) {
        if (node == null) {
            return false
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }
    minNode(node) {
        let current = node
        while (current != null && current.left != null) {
            current = current.left
        }
        return current
    }
    maxNode(node) {
        let current = node
        while (current != null && current.right != null) {
            current = current.right
        }
        return current
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {

            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}

class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.root = null
        this.compareFn = compareFn
    }
    getNodeHeight(node) {
        if (node === null) {
            return -1
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
    }
}
const tree = new AVLTree()
tree.inert(11)
tree.inert(7)
// tree.inert(15)
// tree.inert(5)
// tree.inert(3)
// tree.inert(9)
// tree.inert(8)
// tree.inert(10)
// tree.inert(13)
// tree.inert(12)
// tree.inert(14)
// tree.inert(20)
// tree.inert(18)
// tree.inert(25)
// console.log(tree)
// const printNode = (value) => console.log(value)
// tree.inOrderTraverse(printNode)
// tree.postOrderTraverse(printNode)
// console.log(tree.min())
// console.log(tree.max())
// console.log(tree.search(25))
console.log(tree.getNodeHeight(tree.root))
console.log(tree)