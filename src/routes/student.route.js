const permission = "student";
const express = require("express");
const Student = require("../models/student");
let router = express.Router();
let studentController = require("../controllers/student.controller");
router.use((req, res, next)=>{
    const auth = req.session.auth;
    const permissions = auth.permissions?auth.permissions:[];
    if (permissions.includes(permission)){
      return   next();
    }
    res.status(404).send("404 Not found");
})
router.get("/student",studentController.get);
router.get("/createStudent",studentController.createForm);
router.post("/createStudent",studentController.save );
router.get("/editStudent/:id",studentController.editForm);
router.post("/editStudent/:id",studentController.update);
router.post("/deleteStudent/:id",studentController.delete);
module.exports = router;