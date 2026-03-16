const twilio = require("twilio");

const client = new twilio(
process.env.TWILIO_SID,
process.env.TWILIO_TOKEN
);

const sendWhatsApp = async (lead) => {

try{

await client.messages.create({

from: "whatsapp:+14155238886",
to: "whatsapp:+919347758701",

body: `

🚀 New HAVENTRAIL Lead

Name: ${lead.name}
Service: ${lead.service}
Phone: ${lead.phone}

`

});

}catch(error){

console.log("WhatsApp Error:",error.message);

}

};

module.exports = sendWhatsApp;