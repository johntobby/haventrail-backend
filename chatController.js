const Chat = require("../models/Chat");
const askAI = require("../services/aiService");

exports.chat = async(req,res)=>{

try{

const {message} = req.body;

const aiReply = await askAI(message);

await Chat.create({
userMessage:message,
aiResponse:aiReply
});

res.json({
reply:aiReply
});

}catch(error){

res.status(500).json({error:error.message});

}

};