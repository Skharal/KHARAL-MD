```
const mongoose = require('mongoose');

const ChatBotSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  worktype: {
    type: String,
    default: "public"
  }
})

const chatbot = mongoose.model("chatbot", ChatBotSchema)

module.exports = { chatbot }
```
