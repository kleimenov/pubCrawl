const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    name: {type: String}
  })

module.exports = model("Bars", schema)