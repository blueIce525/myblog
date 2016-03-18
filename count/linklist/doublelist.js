/**
 * Created by kinglan525 on 15/12/11.
 */
//双向列表

function Node(element) {
    this.element = element;
    this.previous = null;
    this.next = null;
};

function LList() {
    this.head = new Node('head');
}

LList.prototype = {
    constructor: LList,
    insert: function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    },
    find: function(item) {
        var currNode = this.head;
        while(currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    remove: function(item) {
        var current = this.find(item);
        if(current.next != null) {
            current.previous.next = current.next;
            current.next.previous = current.previous;
            current.next = null;
            current.previous = null;
        }
    },
    findLast: function() {
        var currNode = this.head;
        while(currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode;
    },
    displayReverse: function() {
        var currNode = this.findLast();
        while(currNode.previous != null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    },
    linkReverse: function() {

        var currNode = this.findLast();
        var newHead;
        var newCurrNode;
        while(currNode.previous != null) {
            if(!newHead) {
                newHead = new Node(currNode.element);
                newCurrNode = newHead;
            } else {
                var newNode = new Node(currNode.element);
                newNode.previous = newCurrNode;
                newCurrNode.next = newNode;
                newCurrNode = newNode;
            }
            currNode = currNode.previous;
        }
        var newNode = new Node('head');
        newNode.previous = newCurrNode;
        newCurrNode.next = newNode;

        this.head = newHead;


    },
    display: function() {
        var currNode = this.head;
        while(currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    },
    display2: function() {
        var currNode = this.head;
        while(currNode.next != null) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }


};

var names = new LList();
names.insert('Liz', 'head');
names.insert('kinglan', 'Liz');
names.insert('Lily', 'kinglan');
names.display();

console.log('反转输出：');
names.displayReverse();

names.remove('kinglan');
console.log('删除kinglan后：');
names.display();

console.log('反转输出：');
names.displayReverse();

console.log('调用反向方法，然后输出：');
names.linkReverse();
names.display2();
