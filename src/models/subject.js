let mongoose = require("mongoose");
let subjects = new mongoose.Schema({
   tenmon:{
       type:String,
       require:true,
       minLength:1,
   },
    sogio:{
        type:String,
        require: true,
        minLength:1,
        maxLength:1000,
    },
    giaovien:{
       tengiaovien:{
           type:String,
           require:true,
           minLength:2,
       },
        email:{
            type:String,
            require:true,
        },
        dienthoai:{
           type:Number,
            require:true,
        }
    }
});
module.exports = mongoose.model("Subjects",subjects);