// To handle collisions we just create a bucket array to store multiple items 
class hashTable{
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
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]];
        }else{
            const sameKeyItem = bucket.find((item) => item[0] === key)  // key is stored at index 0
            if(sameKeyItem){
                sameKeyItem[1] = value // value is stored at index 1
            }else{
                bucket.push([key,value])
            }
            this.table[index] = bucket;
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find((item)=> item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            this.table[index] = bucket.filter(item => item[0] !== key);
        }
        return undefined
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i , ":" , this.table[i]);
            }
        }
    }
}

let collisionTable  = new hashTable(5)
collisionTable.set("name","Ananthu")
collisionTable.set("age","18")
collisionTable.set("class","12")
collisionTable.set("place","Tsr")
// collisionTable.remove("name")
console.log(collisionTable.get("place"));
collisionTable.display()