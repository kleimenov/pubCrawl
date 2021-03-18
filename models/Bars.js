const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    name: {type: String},
    address: {type: String},
    coordinate: {type: Object},
    type: {type: String},
    operation_hours: {type: Object},
    website: {type: String},
    phone: {type: String}

  })

module.exports = model("Bars", schema)