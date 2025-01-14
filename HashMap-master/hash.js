import LinkedList from "./list.js";

class HashMap{
    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity);
        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = new LinkedList();
        }
    }


     hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    } 

    checkLoad(){
        let prod = this.capacity * this.loadFactor;
        if(this.length() > prod){
            return true;
        }else{
            return false;
        }
    }

    set(key, value){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        let node = bucket.getHead();
        let size = bucket.getSize();
        let ind = 1;

        if(this.checkLoad()){
            console.log("Inside checkload")
            let temp = [...this.buckets];
            this.buckets = new Array(this.buckets.length * 2);
            this.capacity = this.buckets.length;

            for(let i = 0; i < this.buckets.length; i++){
                if(i < temp.length){
                    this.buckets[i] = temp[i];
                }else{
                    this.buckets[i] = new LinkedList();
                }
            }
        }

        if(node){
          while(ind <= size){
            if(node.key === key){
              node.data = value;
              return;
            }
            node = node.next;
            ind++;
          }

            bucket.append(key, value);

        }else{
            bucket.append(key, value);
        }

    }

    get(key){
      let index = this.hash(key);
      let bucket = this.buckets[index];
      let node = bucket.getHead();
      let size = bucket.getSize();
      let ind = 1;
      if(index < 0 || index >= this.buckets.length) {
          throw new Error("Trying to access index out of bounds");
      }
      

      if(node){
        while(ind <= size){
          if(node.key === key) {
            return node.data;
          }
          node = node.next;
          ind++;
        }
    }
        return null;
    }

    has(key){
      let index = this.hash(key);
      let bucket = this.buckets[index];
      let node = bucket.getHead();
      let size = bucket.getSize();
      let ind = 1;
      if (index < 0 || index >= this.buckets.length) {
          throw new Error("Trying to access index out of bounds");
      }



      if(node){
        while(ind <= size){
          if(node.key === key) {
            return true;
          }

          node = node.next;
          ind++;
        }

    }
        return false;
    }


    remove(key){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        let node = bucket.getHead();
        let size = bucket.getSize();
        let ind = 1;

        if(node){
          while(ind <= size){
            if(node.key === key){
              let keyIndex = bucket.find(node.data);
              bucket.removeAt(keyIndex);
              return true;
            }
            node = node.next;
            index++;
          }

          return false;
        }

    }

    length(){
        let lists = this.buckets;
        let counter = 0;
        
        for(let i = 0; i < lists.length; i++){
            let list = lists[i];
            let node = list.getHead();
            let size = list.getSize();
            let ind = 1;

            if(node){
                while(ind <= size){
                    if(node.key !== null){
                        counter++;
                    }

                    node = node.next;
                    ind++;
                }
            }
        }
        return counter;
    }

    clear(){
        let lists = this.buckets;
        
        for(let i = 0; i < lists.length; i++){
            let list = lists[i];
            let node = list.getHead();
            let size = list.getSize();
            let ind = 1;

            if(node){
                while(ind <= size){
                    list.pop();
                    ind++;
                }
            }else{
                node = null;
            }
        }
        console.log(lists);
    }

    keys(){
        let keyArr = [];
        let lists = this.buckets;

        for(let i = 0; i < lists.length; i++) {
          let list = lists[i];
          let node = list.getHead();
          let size = list.getSize();
          let ind = 1;
          
          if(node){
            while(ind <= size){
              if(node.key !== null) {
                keyArr.push(node.key);
              }

              node = node.next;
              ind++;
            }
          }
        }

        return keyArr;
    }

    values(){
        let valArr = [];
        let lists = this.buckets;

        for (let i = 0; i < lists.length; i++) {
          let list = lists[i];
          let node = list.getHead();
          let size = list.getSize();
          let ind = 1;

          if(node){
            while(ind <= size){
              if(node.data !== null){
                valArr.push(node.data);
              }

              node = node.next;
              ind++;
            }
          }

        }

        return valArr;
    }

    entries(){
        let pairs = [];
        let lists = this.buckets;

        for (let i = 0; i < lists.length; i++) {
          let list = lists[i];
          let node = list.getHead();
          let size = list.getSize();
          let ind = 1;

          if(node){
            while(ind <= size){
              if(node.key !== null && node.data !== null){
                pairs.push([node.key, node.data]);
              }

              node = node.next;
              ind++;
            }
          }
        }

        return pairs;
    }

}

export default HashMap;