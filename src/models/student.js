let mongoose = require("mongoose");

let students = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,

});
module.exports = mongoose.model("Students",students);
