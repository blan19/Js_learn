class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      let node = current.children[char];

      if (node == null) {
        node = new TrieNode();
        current.children[char] = node;
      }

      current = node;
    }

    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      let node = current.children[char];

      if (node == null) {
        return false;
      }

      current = node;
    }

    return current.endOfWord;
  }

  delete(word) {
    deleteHandler(this.root, word, 0);

    function deleteHandler(current, word, index) {
      if (index === word.length) {
        if (!current.endOfWord) {
          return false;
        }

        current.endOfWord = false;

        return Object.keys(current.children).length === 0;
      }

      const char = word.charAt(index),
        node = current.children[char];

      if (node == null) {
        return false;
      }

      const shouldDeleteCurrentNode = deleteHandler(node, word, index + 1);

      if (shouldDeleteCurrentNode) {
        delete current.children[char];

        return Object.keys(current.children).length === 0;
      }

      return false;
    }
  }
}
