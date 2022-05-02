const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {

   constructor() {
      this.rootNode = null
   }

   root() {
      return this.rootNode
   }

   add(data) {

      this.rootNode = addInData(this.rootNode, data);

      function addInData(node, data) {
         if (!node) {
            return new Node(data)
         }

         if (node.data === data && !data) {
            return node
         }

         if (data < node.data) {
            node.left = addInData(node.left, data)
         } else {
            node.right = addInData(node.right, data)
         }
         return node
      }
   }

   has(data) {
      return searchData(this.rootNode, data);
      console.log(this.rootNode)
      function searchData(node, data) {
         if (!node) {
            return false
         }

         if (node.data === data) {
            return true
         }

         return data < node.data ?
            searchData(node.left, data) :
            searchData(node.right, data);
      }

   }

   find(data) {
      return findData(this.rootNode, data);

      function findData(node, data) {
         if (!node) {
            return null
         }

         if (node.data === data) {
            return node
         }

         return data < node.data ?
            findData(node.left, data) :
            findData(node.right, data);
      }

   }

   remove(data) {

      this.rootNode = removeData(this.rootNode, data);

      function removeData(node, data) {
         if (!node) {
            return null
         }



         if (data < node.data) {
            node.left = removeData(node.left, data)
            return node
         } else if (data > node.data) {
            node.right = removeData(node.right, data)
            return node
         }
         else {
            if (!node.left && !node.right) {
               return null
            }
            if (!node.left) {
               node = node.right
               return node
            }
            if (!node.right) {
               node = node.left
               return node
            }

            let maxFromLeft = node.left
            while (maxFromLeft.right) {
               maxFromLeft = maxFromLeft.right
            }
            node.data = maxFromLeft.data
            node.left = removeData(node.left, maxFromLeft.data)
            return node
         }
      }
      return this
   }

   min() {

      return minData(this.rootNode)
      function minData(node, data) {
         if (!node) {
            return null
         }
         if (!node.left) {
            return node.data
         }
         return minData(node.left)
      }
   }

   max() {
      return maxData(this.rootNode)
      function maxData(node, data) {
         if (!node) {
            return null
         }
         if (!node.right) {
            return node.data
         }
         return maxData(node.right)
      }
   }
}

module.exports = {
   BinarySearchTree
};