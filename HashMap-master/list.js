class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(key, value) {
    let node = new Node(key, value);
    this.size++;
    if (this.head === null) {
      this.head = node;
    } else {
      let tail = this.tail();
      tail.next = node;
    }
  }

  prepend(key, value){
    let head = this.getHead();
    let node = new Node(key, value);
    node.next = head;

    this.head = node;
    this.size++;
  }

  getSize(){
    return this.size;
  }

  getHead() {
    return this.head;
  }

  tail(){
    let tailnode = this.getHead();
    if (tailnode) {
      while (tailnode.next) {
        tailnode = tailnode.next;
      }
    }
    return tailnode;
  }

  at(index){
    let target = this.getHead();
    if(index >= this.size){
        return "Error!, Index Out Of Bounds.";
    }else{
        let i = 0;
        if(target){
            while(target && i < index){
                target = target.next;
                i++;
            }
        }
        return target;
    }
  }

  pop(){
    let node = this.getHead();
    let size = this.getSize();
    let prev = null;
    let current = null;
    let i = 1;

    if(node){
        while(node.next && i < size - 1){
            node = node.next;
            i++;
        }
    }

    prev = node;
    current = node.next;
    current = null;
    prev.next = null;
    this.size--;
    
  }

  contains(value){
    let node = this.getHead();
    let found = null;
    let index = 1;
    let size = this.getSize();
    if(node){
        while(index <= size){
            if(node.data === value){
                found = true;
                return found;
            }else{
                found = false;
            }
            node = node.next;
            index++;
        }
    }

    return found;
  }

  find(value){
    let index = 0;
    let node = this.getHead();

    if(node){
        while(index <= this.getSize()){
            if(node.data === value){
                return index;
            }else{
                node = node.next;
                index++;
            }
        }
    }
  }

  toString(){
    let dt = [];
    let node = this.getHead();
    let size = this.getSize();
    let i = 1;
    if(node){
        while(node.next && i <= size){
          if(i === 1){
            dt.push(node.data);
          }
          node = node.next;
          dt.push(node.data);
          i++;
        }
    }

    let result = dt.map(value => `(${value})`).join('->');
    return result;
  }

  insertAt(key, value, index){
    let elem = new Node(key, value);
    let node = this.getHead();
    let target = null;
    let curr = null;
    let i = 0;
    if(node){
        if(index === 0){
          this.prepend(value);
        }else if(index === 1){
          target = node.next;
          node.next = elem;
          elem.next = target;
        }else{

          while(node.next && i < index){
              if(target === null && i === (index - 2)){
                  target = node.next;
                  console.log(target);
              }
              node = node.next;
              i++;
          }

          curr = target.next;
          target.next = elem;
          elem.next = curr;
          
        }
        
        this.size++;
    }

  }

  removeAt(index){
       let node = this.getHead();
       let target = null;
       let prev = null;
       let next = null;
       let i = 0;
       if (node) {
          if(index === 0){
            next = node.next;
            node = null;
            this.head = next;
          }else{
            let search = this.at(index);
            next = search.next;

            while(node.next){
              if(this.find(node.data) === index - 1){
                prev = node;
              }

              node = node.next;
              i++;
            }

            search = null;
            prev.next = next;

          }
       }

       
       this.size--;
  }
}

class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

export default LinkedList;
