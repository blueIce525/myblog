/**
 * Created by kinglan525 on 15/12/11.
 */
//循环链表

function Node(element) {
    this.element = element;
    this.next = null;
};

function LList() {
    this.head = new Node('head');
    this.head.next = this.head;
}

LList.prototype = {
    constructor: LList,
    find: function(item) {
        var currNode = this.head;
        while(currNode.element != item) {
            currNode =  currNode.next;
        }
        return currNode;
    },
    findPrevious: function(item) {
        var currNode = this.head;
        while((currNode.next != null) && currNode.next != this.head && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    insert: function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },
    remove: function(item) {
        var prevNode = this.findPrevious(item);
        if(prevNode != null) {
            prevNode.next = prevNode.next.next;
        }
    },
    display: function() {
        var currNode = this.head;
        while(currNode.next != null && currNode.next != this.head) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}

var names = new LList();
names.insert('Liz', 'head');
names.insert('kinglan', 'Liz');
names.insert('Lily', 'kinglan');
names.display();
names.remove('kinglan');
console.log('删除kinglan后：');
names.display();
