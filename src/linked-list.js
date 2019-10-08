const Node = require('./node');

class LinkedList {

    constructor(length = 0, head = null , tail = null) {
        this.length = length;
        this._head = head;
        this._tail = tail;
    }

    append(data) {
        let node = new Node(data);
        if(this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        if(!this.length){
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if(this.length > 0){
         return this._head.data;
        } else {
          return null;
        }
     }

    tail() {
        if( this.length > 0 ){
         return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        let currentNode = this._head;
        let currentNodeIndex = 0;
        while(index >= currentNodeIndex){
            if( index === currentNodeIndex){ return currentNode.data; }
            currentNode = currentNode.next;
            currentNodeIndex++;
        }
    }

     insertAt(index, data) {
        if(this._head){
        let currentNode = this._head;
        let counter = 0;
        let nodeBefore = null;
        let nodeAfter = null;
        let newNode = new Node(data);
        while( counter < index ){
            if(counter == index - 1){ nodeBefore = currentNode; }
            currentNode = currentNode.next;
            counter++;
        }
        nodeAfter = currentNode;
        nodeBefore.next = newNode;
        nodeAfter.prev  = newNode;
        newNode.next = nodeAfter;
        newNode.prev = nodeBefore;
    } else {
        let node = new Node(data);
        this._head = node;
        this._tail = node;
    }
        this.length++; 
        return this;
     }

     isEmpty() {
        if( this.length == 0 ){ 
            return true
         } else { 
            return false; 
        }
     }

     clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
     }

    deleteAt(index) {
        let currentNode = this._head;
        let prevNode = null;
        let nextNode = null;
        let nodeToDel = null;
        if(this.length !== 0 && index <= this.length){

            if(index == 0){  // case: delete head of list
                this._head = currentNode.next; 
                if(!this._head){
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            }

            if(this.length !== 1 && index == this.length - 1){ // case: delete tail of list
                this._tail = this._tail.prev;
                this._tail.next = null;
            }

            if( index < this.length - 1  && index !== 0 ){ // case: delete specific node(excluding head/tail) of list
                for(let i = 0; i < index; i++){
                    currentNode = currentNode.next;
                }
                prevNode  = currentNode.prev;
                nodeToDel = currentNode;
                nextNode  = currentNode.next;

                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                nodeToDel = null;
            }
        }
        this.length--;
        return this;
    }

     reverse() {
      if( this.length > 1){
        let currentNode = this._head;
        this._head  = this._tail;
        this._tail = currentNode;
        while(currentNode){
            let nextNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = nextNode;
            currentNode = currentNode.prev;
        }
      }
      return this;
     }

     indexOf(data) {
         let currentNode = this._head;
         for( let i = 0 ; i < this.length; i++){
             if(currentNode.data == data){ return i; } 
             if(i == this.length - 1 && currentNode.data !== data){ return -1; }
             currentNode = currentNode.next;
         }
     }
}

module.exports = LinkedList;




