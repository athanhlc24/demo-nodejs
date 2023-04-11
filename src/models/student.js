let mongoose = require("mongoose");

let students = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        minLength:[6,'Tên phải có độ dài tối thiểu là 6'],
        maxLength:255,
    },
    email:{
        type:String,
        require: true,
        unique:[true,'Email vừa nhập đã tồn tại!'],
        minLength:6,
        maxLength:255,
    },
    age:{
        type:Number,
        require:true,
        min:18,
        max:100,
    },
    // tel:{
    //     type:String,
    //     require:true,
    //     validate:{
    //         validator: (v)=>{
    //             const regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    //             return v.match(regExp);
    //         }
    //     },
    //     message: t =>`${t}không phải là số điện thoại`
    // },

});
module.exports = mongoose.model("Students",students);
