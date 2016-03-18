/**
 * Created by kinglan525 on 15/12/25.
 */

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
    this.show = function() {
        return this.data;
    }
}

function BST() {
    this.root = null;
    this.nodeNum = 0;
    this.sideNum = 0;
}
BST.prototype = {
    constructor: BST,
    insert: function(data) {
        var n = new Node(data, null, null);
        if(this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while(true) {
                parent = current;
                if(data < current.data) {
                    current = current.left;
                    if(current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if(current == null) {
                        parent.right = n;
                        break;
                    }
                }

            }
            ++this.sideNum;
        }
        ++this.nodeNum;
    },
    inOrder: function(node, isShow) {
        if(node != null) {
            this.inOrder(node.left, isShow);
            if(isShow) {
                console.log(node.show() + ':' + node.count);
            } else {
                console.log(node.show());
            }
            this.inOrder(node.right,isShow);

        }
    },
    preOrder: function(node) {
        if(node != null) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    postOrder: function(node, isShow) {
        if(node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    },
    //练习4、返回最小值
    getMin: function() {
        var current = this.root;
        while(current.left != null) {
            current = current.left;
        }
        return current.data;
    },
    //练习3、返回最大值
    getMax: function() {
        var current = this.root;
        while(current.right != null) {
            current = current.right;
        }
        return current.data;
    },
    find: function(data) {
        var current = this.root;
        while(current != null) {
            if(current.data == data) {
                return current;
            } else if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    },
    remove: function(data) {
        var root = this.removeNode(this.root, data);
        --this.nodeNum;
        --this.sideNum;
    },
    removeNode: function(node, data) {
        if(node == null) {
            return null;
        }
        if(data == node.data) {
            //没有子节点的节点
            if(node.left == null && node.right == null) {
                return null;
            }
            //没有左子节点的节点
            if(node.left == null) {
                return node.right;
            }
            //没有右子节点的节点
            if(node.right == null) {
                return node.left;
            }
            //有两个子节点的节点
            var tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if(data < node.data){
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
        }

    },
    getSmallest: function(node) {
        if(node.left == null) {
            return node;
        } else {
            return this.getSmallest(node.left);
        }
    },
    update: function(data) {
        var grade = this.find(data);
        grade.count++;
        return grade;
    },
    //练习1:返回节点数
    getNodeNum: function() {
        return this.nodeNum;
    },
    //练习2:返回边数
    getSideNum: function() {
        return this.sideNum;
    }

};

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(2);

console.log('InOrder traversal:');
nums.inOrder(nums.root);
console.log('the nodeNum is: ' + nums.getNodeNum());
console.log('the sideNum is: ' + nums.getSideNum());

nums.remove(23);
console.log('after remove:');
nums.inOrder(nums.root);
console.log('the nodeNum is: ' + nums.getNodeNum());
console.log('the sideNum is: ' + nums.getSideNum());

//console.log('preOrder traversal:');
//nums.preOrder(nums.root);
//
//console.log('postOrder traversal:');
//nums.postOrder(nums.root);
//
//console.log('the minimum:' + nums.getMin());
//console.log('the maximum:' + nums.getMax());
//
//if(nums.find(2) != null) {
//    console.log('2 is in nums');
//} else {
//    console.log('2 is not in nums');
//}
//
//if(nums.find(5) != null) {
//    console.log('5 is in nums');
//} else {
//    console.log('5 is not in nums');
//}

//练习4：存储单词，并统计单词出现的次数
var article = 'the brown fox jumped over the blue fox';
var arr = article.split(' ');
var words = new BST();
for(var i = 0, l = arr.length; i < l; i++) {
    if(words.find(arr[i])) {
        words.update(arr[i]);
    } else {
        words.insert(arr[i]);
    }
}
words.inOrder(words.root, true);