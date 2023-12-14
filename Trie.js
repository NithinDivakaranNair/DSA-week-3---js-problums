class Node{
    constructor(val){
        this.value=val;
        this.isEndofword=false;
        this.children=new Array(26)
    }
}

class Trie{
    constructor(){
        this.root=new Node('')
    }

    insert(word){
        let current=this.root;
        for(let i=0;i<word.length;i++){
            let charIndex=word.charCodeAt(i)-97
            if(!current.children[charIndex]){
                current.children[charIndex]=new Node(word[i])
            }
            current=current.children[charIndex]

        }
        current.isEndofword=true
    }

    getNode(word){
        if(word==='')return this.root;
        let current=this.root

        for(let i=0;i<word.length;i++){
            let charIndex=word.charCodeAt(i)-97
            if(!current.children[charIndex]){
                return null
            }
            current=current.children[charIndex]
        }
        return current
    }

    startwith(word){
        let node=this.getNode(word)
        return node
    }

    search(word){
        let node=this.getNode(word)
        return (node&&node.isEndofword)
    }
    

    AllWords(starting=''){
        let startingNode=this.getNode(starting)
        let word=[]
        this.findAllWords(startingNode,starting,word)
return word
    }
    findAllWords(node,prefix,words){
        if(node){
            if(node.isEndofword){
                words.push(prefix)
            }
            for(let i=0;i<node.children.length;i++){
                if(node.children[i]){
                    this.findAllWords(node.children[i],prefix+node.children[i].value,words)
                }
            }
        }
    }
}
let list=new Trie()
list.insert('helo')
list.insert('cbcbc')
console.log(list.AllWords());

console.log(list.search("helo"))
console.log(list.startwith('cbc'));

console.log(list.getNode('h'));