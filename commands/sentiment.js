```
const natural = require('natural');

const analyzer = new natural.SentimentAnalyzer();

const text = "Mai aapke bot se khush hu!";
const sentiment = analyzer.getSentiment(text);

console.log(sentiment);
```
