const Student = require("../models/student");
const permission = "student";
exports.get = async function (req,res){// chuyển hàm về đồng bộ hoá
    try {
        const auth = req.session.auth;
        const ls1 = await Student.find({});
        // const ls2 = await Student.find({name:"Nam"});
        res.render("dsStudent",{
            items:ls1,
            auth:auth,
        });
    }catch(err) {
        res.send(err);
    }
}
exports.createForm = (req,res)=>{
    res.render("createStudent");
}
exports.save = (req,res)=>{
    let s = req.body;

    let newStudent = new Student(s);
    newStudent.save().then(rs=>{
        res.redirect("/students/student");
    }).catch(err=>{
        res.send(err);
    })
}
exports.editForm = (req,res)=>{
    let id = req.params.id;

    Student.findById(id).then(rs=>{
        res.render("editStudent",{
            data:rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.update = (req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Student.findByIdAndUpdate(id,data)
        .then(rs=>res.redirect("/students/student"))
        .catch(err=>res.send(err));

}
exports.delete = (req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Student.findByIdAndDelete(id)
        .then(rs=>res.redirect("/students/student"))
        .catch(err=>res.send(err));

}
