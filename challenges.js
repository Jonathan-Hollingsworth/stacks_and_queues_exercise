const Queue = require("./queue");
const Stack = require("./stack");
const LinkedList = require("./linked-list")

class Browser {
  constructor() {
    this.current = null
    this.prev = new Stack()
    this.next = new Stack()
  }

  visit(site){
    if (this.current !== null) this.prev.push(this.current)
    this.current = site

    while (this.next.size) {
      this.next.pop()
    }
  }

  back(){
    try {
      this.next.push(this.current)
      this.current = this.prev.pop()
    } catch(error) {
      console.error("The 'prev' stack is currently empty")
    }
  }

  forward(){
    try {
      this.prev.push(this.current)
      this.current = this.next.pop()
    } catch(error) {
      console.error("The 'next' stack is currently empty")
    }
  }
}

function reverseString(string) {
  let charStack = new Stack()
  let reversed = ''

  for (const char of string) {
    charStack.push(char)
  }

  while (charStack.size > 0) {
    reversed += charStack.pop()
  }

  return reversed
}

function checkBracketBalance(string) {
  let bracketStack = new Stack()

  for (const char of string) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        bracketStack.push(char)
        break;
      case ')':
        if (bracketStack.peek() !== '(') return "Imbalanced"
        bracketStack.pop()
        break;
      case ']':
        if (bracketStack.peek() !== '[') return "Imbalanced"
        bracketStack.pop()
        break;
      case '}':
        if (bracketStack.peek() !== '{') return "Imbalanced"
        bracketStack.pop()
        break;
      default:
        break;
    }
  }

  return 'Balanced'
}

function survivor(maxNum, skip) {
  let group = new LinkedList()
  for (let i = 1; i <= maxNum; i++) {
    group.push(i)
  }
  group.tail.next = group.head

  while (group.length > 0) {
    //
  }
}

function polishCalculator(mathStr) {

}