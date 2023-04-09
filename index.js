const express = require("express");

const app  = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server is running...");
})

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// collect database
const database = require("./src/database");
const Student = require("./src/models/student");


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


app.get("/student",function (req,res){// routing Bộ định tuyến
   const Student  = require("./src/models/student");
   Student.find({}).then(rs=>{
        res.render("dsStudent",{
            items:rs
        });
   }).catch(err=>{
        res.send(err);
   });
});
app.get("/createStudent",function (req,res){
    res.render("createStudent");
});
app.post("/createStudent",function (req,res){
    let s = req.body;
    const Student = require("./src/models/student");
    let newStudent = new Student(s);
    newStudent.save().then(rs=>{
        res.redirect("/student");
    }).catch(err=>{
        res.send(err);
    })
});
app.get("/editStudent/:id",(req,res)=>{
    let id = req.params.id;
    let Student = require("./src/models/student");
    Student.findById(id).then(rs=>{
       res.render("editStudent",{
           data:rs
       });
    }).catch(err=>{
        res.send(err);
    });
});
app.post("/editStudent/:id",(req,res)=>{
    let id = req.params.id;
    let data = req.body;
    let Student = require("./src/models/student");
    Student.findByIdAndUpdate(id,data).then(rs=>res.redirect("/student")).catch(err=>res.send(err));

});
app.post("/deleteStudent/:id",(req,res)=>{
    let id = req.params.id;
    let data = req.body;
    let Student = require("./src/models/student");
    Student.findByIdAndDelete(id).then(rs=>res.redirect("/student")).catch(err=>res.send(err));

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

