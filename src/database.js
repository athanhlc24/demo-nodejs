const  server = process.env.DATABASE_SERVER;
const database = process.env.DATABASE_NAME;
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