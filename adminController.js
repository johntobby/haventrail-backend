const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async(req,res)=>{

const {email,password} = req.body;

const admin = await Admin.findOne({email});

if(!admin) return res.status(401).json({message:"Invalid"});

const match = await bcrypt.compare(password,admin.password);

if(!match) return res.status(401).json({message:"Invalid"});

const token = jwt.sign({id:admin._id},process.env.JWT_SECRET);

res.json({token});

};