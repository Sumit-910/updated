const express=require("express");
const router=express.Router();
// const {authentication}=require("../middleware");
const {auth}=require("../controllers");

router.post("/signup",[],auth.signup);
router.post("/login",[],auth.login);
router.post("/register/teachers",[],auth.registerTeachers);
router.post("/register/students",[],auth.registerStudents);
router.get("/getallstudents",[],auth.getAllStudents);
router.get("/getallteachers",[],auth.getAllTeachers);


module.exports=router;