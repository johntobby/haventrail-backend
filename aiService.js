const OpenAI = require("openai");

const client = new OpenAI({
apiKey: process.env.OPENAI_KEY
});

const askAI = async(message)=>{

const response = await client.chat.completions.create({

model:"gpt-4.1-mini",

messages:[
{
role:"system",
content:"You are HAVENTRAIL AI assistant. Help visitors understand services like AI automation, websites and SaaS."
},
{
role:"user",
content:message
}
]

});

return response.choices[0].message.content;

};

module.exports = askAI;