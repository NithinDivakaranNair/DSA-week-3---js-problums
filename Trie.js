class TrieNode {
    constructor() {
        this.children = {};
        this.End = false
    }
}

class trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode()
            }
            node = node.children[word[i]]
        }
        node.End = true
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]]
            } else {
                return false;
            }
        }
        return node.End;
    }

    startwith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (node.children[prefix[i]]) {
                node = node.children[prefix[i]]
            } else {
                return false

            }
        }
        console.log(`Words with prefix '${prefix}':`);
        this.printWords(node, prefix);
    }

    remove(word) {

        this.removeword(this.root, word, 0)
    }
    removeword(node, word, index) {

        if (index === word.length) {
            node.End = false;
            return
        }
        const childNode = node.children[word[index]]
        if (childNode) {
            this.removeword(childNode, word, index + 1)
        }
        if (!childNode.end && Object.keys(childNode.children).length === 0) {
            delete node.children[word[index]]
        }
    }

    print() {
        this.printWords(this.root, "");
    }

    printWords(node, currentWord) {
        if (node.End) {
            console.log(currentWord);
        }

        for (const char in node.children) {
            this.printWords(node.children[char], currentWord + char);
        }
    }

}

const tries = new trie();
tries.insert("cat");
tries.insert("car");
tries.insert("bat");
console.log(tries.search("botr"));
console.log(tries.startwith("c"));
// tries.print()
// tries.remove("car")
// tries.print()