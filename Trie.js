class TrieNode {
    constructor() {
        this.children = {};
        this.end = false; // Use camelCase for variable names
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode();
            }
            node = node.children[word[i]];
        }
        node.end = true; // Use camelCase for variable names
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return false;
            }
        }
        return node.end; // Use camelCase for variable names
    }

    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (node.children[prefix[i]]) {
                node = node.children[prefix[i]];
            } else {
                return false;
            }
        }
        console.log(`Words with prefix '${prefix}':`);
        this.printWords(node, prefix);
        return true; // Added return statement
    }

    remove(word) {
        this.removeWord(this.root, word, 0); // Fix function name
    }

    removeWord(node, word, index) {
        if (index === word.length) {
            node.end = false; // Use camelCase for variable names
            return;
        }
        const childNode = node.children[word[index]];
        if (childNode) {
            this.removeWord(childNode, word, index + 1);
        }
        if (!childNode.end && Object.keys(childNode.children).length === 0) {
            delete node.children[word[index]];
        }
    }

    print() {
        this.printWords(this.root, "");
    }

    printWords(node, currentWord) {
        if (node.end) {
            console.log(currentWord);
        }

        for (const char in node.children) {
            this.printWords(node.children[char], currentWord + char);
        }
    }
}

const tries = new Trie();
tries.insert("cat");
tries.insert("car");
tries.insert("bat");
tries.remove('cat')


console.log(tries.search("botr"));
console.log(tries.startsWith("c"));

