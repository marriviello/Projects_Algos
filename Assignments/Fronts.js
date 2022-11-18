class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Add Front
    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    }

    // Remove Front
    removeFront() {
        if(this.head == null){
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head
    }

    // Front
    front() {
        if (this.head == null) {
            return null;
        } else{
            return this.head.value
        }
    }
}

var mySLL = new SLL();
console.log(mySLL.front())
mySLL.addFront(18);
console.log(mySLL.front())
mySLL.addFront(2);
console.log(mySLL);
mySLL.removeFront();
console.log(mySLL)
