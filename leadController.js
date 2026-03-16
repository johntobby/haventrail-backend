const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}

});

const sendEmail = async (lead)=>{

try{

await transporter.sendMail({

from:process.env.EMAIL_USER,

to:"haventrailfinds.jh@gmail.com",

subject:"🚀 New HAVENTRAIL Lead",

text:`

New Client Request

Name: ${lead.name}

Email: ${lead.email}

Phone: ${lead.phone}

Service: ${lead.service}

Message:
${lead.message}

`

});

}catch(error){

console.log("Email Error:",error.message);

}

};

module.exports = sendEmail;