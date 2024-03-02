// Implementation of Hashtable
// Data is stored as key value pairs
// Operations are handled using keys that we created for the values so that it has less complexity.

class Hashtable{
    constructor(n){
        this.table = new Array(n)
        this.size = n
    }

    hash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = null
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i , ":" , this.table[i]);
            }
        }
    }
}

let table = new Hashtable(5)
table.set("name","Ananthu")
table.set("age","18")
table.set("class","12")
table.set("place","Tsr")
console.log(table.get("name"));
table.display()



