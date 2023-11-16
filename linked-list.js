/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
  
/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      let newNode = new Node(val);
  
      if (this.head === null) this.head = newNode;
      if (this.tail !== null) this.tail.next = newNode;
  
      this.tail = newNode;
      this.length += 1
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      let newNode = new Node(val);
  
      if (this.head !== null) newNode.next = this.head;
      if (this.tail === null) this.tail = newNode;
  
      this.head = newNode;
      this.length += 1
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      let currentNode = this.head
  
      while (currentNode !== null) {
        if (currentNode.next === this.tail){
          let removedTail = currentNode.next
          currentNode.next = null
          this.tail = currentNode
          this.length -= 1
          return removedTail.val
        } else if (currentNode === this.tail) {
          let removedTail = currentNode
          currentNode = null
          this.tail = null
          this.head = null
          this.length -= 1
          return removedTail.val
        } else {
          currentNode = currentNode.next
        }
      }
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      if(this.length > 1){
        let removedHead = this.head
        this.head = removedHead.next
        this.length -= 1
        return removedHead.val
      } else if (this.length === 1){
        let removedHead = this.head
        this.head = null
        this.tail = null
        this.length -= 1
        return removedHead.val
      }
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
      let currentNode = this.head
      let currentIdx = 0
  
      while (currentNode !== null) {
        if (currentIdx === idx) {
          return currentNode.val
        } else {
          currentNode = currentNode.next
          currentIdx ++
        }
      }
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
      let currentNode = this.head
      let currentIdx = 0
  
      while (currentNode !== null) {
        if (currentIdx === idx) {
          currentNode.val = val
          return
        } else {
          currentNode = currentNode.next
          currentIdx ++
        }
      }
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
      let newNode = new Node(val);
      let currentNode = this.head
      let prevNode
      let currentIdx = 0
  
      if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
        this.length += 1
        return
      }
  
      while (currentNode !== null) {
        if (currentIdx === idx) {
          if (currentNode === this.head) {
            this.head = newNode
            newNode.next = currentNode
          } else {
            prevNode.next = newNode
            newNode.next = currentNode
          }
          this.length += 1
          return
        } else if (idx === this.length) {
          this.tail.next = newNode
          this.tail = newNode
          this.length += 1
          return
        } else {
          prevNode = currentNode
          currentNode = currentNode.next
          currentIdx ++
        }
      }
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
      let currentNode = this.head
      let prevNode
      let currentIdx = 0
  
      if (this.length === 1) {
        this.head = null
        this.tail = null
        this.length -= 1
        return
      }
  
      while (currentNode !== null) {
        if (currentIdx === idx) {
          if (currentNode === this.tail) {
            prevNode.next = null
            this.tail = prevNode
          } else if (currentNode === this.head) {
            this.head = currentNode.next
          } else {
            prevNode.next = currentNode.next
          }
          this.length -= 1
          return
        } else {
          prevNode = currentNode
          currentNode = currentNode.next
          currentIdx ++
        }
      }
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      let currentNode = this.head
      let total = 0
  
      while (currentNode !== null) {
        total += currentNode.val
        currentNode = currentNode.next
      }
  
      if (this.length === 0) {
        return 0
      }
  
      return total/this.length
    }
}
  
module.exports = LinkedList;