```
const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  id: {
    type: String,
    default: "secfork"
  },
  count: {
    type: Number,
    default: 0
  }
})

const card = mongoose.model("card", CardSchema)

module.exports = { card }
```
