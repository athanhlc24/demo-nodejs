const Student = require("../models/student");

exports.get = (require,res)=>{
    Student.find({}).then(rs=>{
        res.render("dsStudent",{
            items:rs
        });
    }).catch(err=>{
        res.send(err);
    });
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
