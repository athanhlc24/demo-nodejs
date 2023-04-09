const  server = "mongodb://127.0.0.1:27017";
const database = "demo_nodejs";
let mongoose = require("mongoose");
class Database{
    constructor() {// tu dong chay khi tao doi tuong
        this.__connect();
    }
    __connect(){
        mongoose.connect(`${server}/${database}`).then(()=>{
            console.log("Connected database!");
        })
            .catch((err)=>{
                console.log(err)
            })
    }
}
module.exports = new Database();