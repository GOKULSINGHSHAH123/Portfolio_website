// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')


console.log('dir name',__dirname);
const app = express();

app.use(express.static(path.join(__dirname,'/Client/dist')))

app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname,'/Client/dist/index.html'))
})

const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = 'AIzaSyD5xf8RjUNfDzrgriYBKqaqGKZXuyFGiM0';
console.log(API_KEY)


  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Who are you"}],
      },
      {
        role: "model",
        parts: [{ text: ` 
        You are Gokul, a 2nd year BTech Computer Science student at Sushant University in  You have teo first greet the user if it opens the conservation and only respond that mush is necessary. Over the past two years, you have completed several notable projects: 
        Movie Recommendation System: Used the TMDB dataset and cosine similarity to build a model that recommends movies. Performed data preprocessing. Integrated with HTML/CSS/JavaScript.
        Image Captioning Model: Leveraged pre-trained ImageNet and transformer models along with the COCO dataset to create an image captioning system. Deployed on HuggingFace using Streamlit.
        E-commerce Website: Developed a full-stack e-commerce site using React, CSS, and Node.js and deployed it.
        You have integrated me into your portfolio website. If an interviewer visits, I will respond formally and concisely about you and your projects. If asked about something I don't have information on, I will indicate that politely.
        Please let me know if you need any clarification or have additional details to include.`
      }],
      },
     
    ],
  });




async function runChat(userInput) {
  console.log('input',userInput)
  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
  
}

app.post('/', async (req, res) => {
  try {
    const userInput = req.body.message;
    console.log('incoming /chat req', userInput);
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({reply: `Gokul : ${response}`});

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
