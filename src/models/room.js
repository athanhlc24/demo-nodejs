let mongoose = require("mongoose");

let rooms = new mongoose.Schema({
    room_name:String,
    room_type:String,


});
module.exports = mongoose.model("Room",rooms);
