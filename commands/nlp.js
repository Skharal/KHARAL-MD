```
const natural = require('natural');

const tokenizer = new natural.WordTokenizer();

const text = "Aapka bot kaisa hai?";
const tokens = tokenizer.tokenize(text);

console.log(tokens);
```
