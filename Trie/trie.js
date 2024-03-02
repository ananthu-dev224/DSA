// Implementation of trie Data Structure

class trieNode {
    constructor(){
        this.children = new Map()
        this.isEndOfWord = false;
    }
}

class trie {
    constructor(){
        this.root = new trieNode()
    }

    insert(word){
        let node = this.root;
        for(const char of word){
            if(!node.children.has(char)){
                node.children.set(char,new trieNode())
            }

            node = node.children.get(char)
        }
        node.isEndOfWord = true //
    }

    search(prefix){
        let node = this.root;
        for(const char of prefix){
            if(!node.children.has(char)){
                return []
            }

            node = node.children.get(char)
        }
        
        return this.getSuggestions(node,prefix)
    }

    getSuggestions(node,prefix){
        let suggestWords = []
        if(node.isEndOfWord){
            suggestWords.push(prefix)
        }

        for(const [char,childNode] of node.children.entries()){
            const childPrefix = prefix + char
            suggestWords.push(...this.getSuggestions(childNode,childPrefix))
        }

        return suggestWords;
    }

    remove(word){
        return this.removeHelper(word,this.root,0)
    }

    removeHelper(word,node,index){
        if(index === word.length){
            if(!node.isEndOfWord) return false; //Word not found
            node.isEndOfWord = false
            return node.children.size === 0 //No childNodes exist , success deletion
        }

        const char = word[index]
        if(!node.children.has(char)) return false;

        const childNode = node.children.get(char)
        const deleteChild = this.removeHelper(word,childNode,index+1)

        if(deleteChild){
            node.children.delete(char)
            return node.children.size === 0 && !node.isEndOfWord
        }

        return false;
    }


}

let Trie = new trie()
Trie.insert("Hey")
Trie.insert("Hello")
Trie.insert("Hey Mate!")
Trie.insert("Hi")
Trie.remove('Hello')

console.log(Trie.search("He"));