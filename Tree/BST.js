// Implementation of Binary Search Tree

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}



class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return newNode
        } else {
            return this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                return this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                return this.insertNode(node.right, newNode)
            }
        }
    }

    search(data) {
        return this.searchNode(this.root, data)
    }

    searchNode(root, data) {
        if (root === null) return false;

        if (data < root.data) {
            return this.searchNode(root.left, data)
        } else if (data > root.data) {
            return this.searchNode(root.right, data)
        } else {
            return true;
        }
    } 

    min() {
        return this.findMinNodeLeft(this.root)
    }

    findMinNodeLeft(node) {
        if (node.left === null) {
            return node.data
        } else {
            return this.findMinNodeLeft(node.left)
        }
    }

    findMinNodeRight(node) {
        if (node.right === null) {
            return node;
        } else {
            return this.findMinNodeRight(node.right);
        }
    }


    remove(data) {
        return this.removeNode(this.root, data)
    }

    removeNode(node, data) {  //Edge case : remove root node issue
        if (node === null) return null;

        if (data < node.data) {
            node.left = this.removeNode(node.left, data)
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data)
        }
        else {
            if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            }

            const minRight = this.findMinNodeRight(node.right)
            node.data = minRight.data
            node.right = this.removeNode(node.right, minRight.data)
        }
        return node;
    }

    getHeight(node = this.root){
         if(node === null) return 0;

         const leftHeight = this.getHeight(node.left)
         const rightHeight = this.getHeight(node.right)

         return Math.max(leftHeight,rightHeight) + 1;
    }

    getDepth(data){
        return this.calculateDepth(this.root,data,0)
    }

    calculateDepth(node,data,depth){
        if(node === null) return -1;

        if(node.data === data){
            return depth;
        }

        if(data < node.data){
            return this.calculateDepth(node.left,data,depth+1)
        }else{
            return this.calculateDepth(node.right,data,depth+1)
        }
    }

    // Display Methods
    postOrder(node = this.root) { // left - right - root
        if (!node) return []
        const leftChilds = this.postOrder(node.left)
        const rightChilds = this.postOrder(node.right)
        const current = [node.data]

        return leftChilds.concat(rightChilds, current)
    }

    preOrder(node = this.root) { // root - left - right
        if (!node) return []
        const current = [node.data]
        const leftChilds = this.preOrder(node.left)
        const rightChilds = this.preOrder(node.right)

        return current.concat(leftChilds, rightChilds)
    }

    inOrder(node = this.root) {  // left - root - right (Ascending order)
        if (!node) return []

        const leftChilds = this.inOrder(node.left)
        const current = [node.data]
        const rightChilds = this.inOrder(node.right)

        return leftChilds.concat(current, rightChilds)
    }

    findClosest(root,target) {
        let closest = root.data;
        let minDiff = Math.abs(target - closest)
        let current = root
        while(current !== null){
            const currentDiff = Math.abs(target - current.data )
             
            if(currentDiff < minDiff){
                minDiff = currentDiff
                closest = current.data
            }

            if(target < current.data){
                current = current.left
            }else if(target > current.data){
                current = current.right
            }else{
                return closest
            }
        }

        return closest
    }


}

let bst = new BST()
bst.insert(100)
bst.insert(20)
bst.insert(200)
bst.insert(10)
bst.insert(30)
bst.insert(150)
bst.insert(1)
bst.insert(2)
bst.insert(3)

console.log("Height :" , bst.getHeight());
console.log("Depth :" , bst.getDepth(3));

console.log("Does the value exist ?", bst.search(30));
console.log("Smallest value in BST :", bst.min());
console.log("inOrder :", bst.inOrder());
console.log("preOrder :", bst.preOrder());
console.log("postOrder :", bst.postOrder());

let tree = new BST()
let treeRoot = tree.insert(100)
tree.insert(20)
tree.insert(200) 
tree.insert(10)
tree.insert(30)
tree.insert(150)
tree.insert(300)


console.log("Closest values is :",tree.findClosest(treeRoot,12));

const isValidBST = function(root){
    function helper(root,min,max){
         if(!root) return true

         if((min !== null && root.data <= min) || (max !== null && root.data >= max)) {
            return false;
         }

         return helper(root.left,min,root.data) && helper(root.right,root.data,max)
    }
    return helper(root,null,null)
}

console.log(isValidBST(treeRoot));



