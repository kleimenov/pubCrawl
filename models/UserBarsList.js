const { Schema, model, Types } = require("mongoose");


//schema is under construction
const schema = new Schema({
    barName: {type: String},
    address: {type: String},
    coordinate: {type: Object},
    type: {type: String},
    operation_hours: {type: Object},
    website: {type: String},
    phone: {type: String}
})

module.exports = model("UserBarsList", schema);