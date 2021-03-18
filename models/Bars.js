const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    barName: {type: String},
    adress: {type: String},
    coordinates: {type: Types.ObjectId},
    hours: {type: Types.ObjectId},
})

module.exports = model("Bars", schema)