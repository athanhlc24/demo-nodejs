
// collect database
require("dotenv").config();
const PORT = process.env.PORT || 3333;

const express = require("express");
const app  = express();



const database = require("./src/database");
const Student = require("./src/models/student");
const Subject = require("./src/models/subject");


app.listen(PORT,()=>{
    console.log("Server is running...");
})

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//start session
const session = require("express-session");
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"t2203e",
    cookie:{
        maxAge:3600000, //milisecond
        // secure:true
    }
}))

const studentRouter = require("./src/routes/student.route");
app.use("/students",studentRouter);
const subjectRouter = require("./src/routes/subject.route");
app.use("/subjects",subjectRouter);
const authRouter = require("./src/routes/auth.route");
app.use("/auth",authRouter)


app.get("/",function (req,res){// routing Bộ định tuyến
    let student = {
      name:"Nguyễn Văn An",
      age:19
    };
    let room = {
      name:"t2203e",
    };
    res.render("home",{
        student: student,
        room:room
    })
});





app.get("/room/dsRoom",function (req,res){
    const Room  = require("./src/models/room");
    Room.find({}).then(rs=>{
        res.render("room/dsRoom",{
            items:rs
        });
    }).catch(err=>{
        res.send(err);
    });
});


