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

const BalanceFator = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
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
    getBalanceFator(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
        switch (heightDifference) {
            case -2:
                return BalanceFator.UNBALANCED_RIGHT
            case -1:
                return BalanceFator.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFator.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFator.UNBALANCED_LEFT
            default:
                return BalanceFator.BALANCED
        }
    }
    insert(key) {
        this.root = this.insertNode(this.root, key)
    }
    insertNode(node, key) {
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node
        }

        const balanceFator = this.getBalanceFator(node)
        if (balanceFator === BalanceFator.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node)
            }
        } else if (balanceFator === BalanceFator.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node)
            }
        }
        return node
    }


    rotationLL(node) {
        const temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    rotationLR(node) {

    }
    rotationRR(node) {
        const temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
}
const tree = new AVLTree()
tree.insert(11)
tree.insert(15)
tree.insert(7)
tree.insert(5)
tree.insert(8)
tree.insert(3)
// tree.insert(50)
// tree.insert(30)
// tree.insert(70)
// tree.inert(10)
// tree.inert(5)
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
// console.log(tree.getNodeHeight(tree.root))
console.log(tree)