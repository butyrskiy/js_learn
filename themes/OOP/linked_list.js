// Todo. Далаем имплементацию класса (implementation of a class)
// ? Имплементация класса (implementation of a class) - это процесс создания реализации или кода, который определяет поведение и свойства класса. Этот процесс включает в себя написание кода, который определяет функции и переменные, которые будут использоваться в классе, а также их взаимодействие.


class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if(!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  toArray() {
    
  }
}

const list = new LinkedList();
list.append('a').append('b').append('c');

console.log(JSON.stringify(list));