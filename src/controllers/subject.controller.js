const Subject = require("../models/subject");
const Student = require("../models/student");


exports.get = (require,res)=>{
    Subject.find({}).then(rs=>{
        res.render("subject/list",{
            items:rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.createForm = (req,res)=>{
    res.render("subject/create");
}
exports.save = (req,res)=>{
    let s = req.body;

    let newSubject = new Subject(s);
    newSubject.save().then(rs=>{
        res.redirect("/subjects/list");
    }).catch(err=>{
        res.send(err);
    })
};
exports.editForm = (req,res)=>{
    let id = req.params.id;

    Subject.findById(id).then(rs=>{
        res.render("subject/edit",{
            data:rs
        });
    }).catch(err=>{
        res.send(err);
    });
};
exports.update = (req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Subject.findByIdAndUpdate(id,data)
        .then(rs=>res.redirect("/subjects/list"))
        .catch(err=>res.send(err));

};
exports.delete = (req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Subject.findByIdAndDelete(id)
        .then(rs=>res.redirect("/subjects/list"))
        .catch(err=>res.send(err));

}
