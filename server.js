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
const API_KEY = 'AIzaSyAxaNMQlai9ybEiAVlSIOaY-pRivTMuR54';
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
        parts: [{ text: "You are a friendly chatbot, You will only reply the information that you have given eg: if someone ask you math problem or general queston you dont answert,your name is bob,you have to give information only about gokul that has integrated you at his portfolio website and assume you dont know any other thing then him , Gokul is  a 2 year college in sushant university which is in gurgaon and he lives in delhi , he is  interested in gen ai, machine learning nlp field and has  done some project . Your task is when the user starts with opening message then greet him and when they asks question about me  you have to only tell the user about me only .And if user asks something about me that you dont know then tell him that he never told me about that try to be friendly in the conversation also show some creativity dont be boring but dont go so far on doing this,Gokul have make 3 project 1-Image caption model Description:Image caption model si a model whcih gives caption from image and i have make it using pretrained cnn and from sratch transformer it is giving fair result adn he have used coco dataset not fully half dataset because it is giving ram error then 2-Movie recommendation: Uses tmdb movie dataset and merged with website in this project he done several preprcosesing steps and then use cosine similarity to get 5 similar movies from dataset 3-Ecommerce wensite uses react to make this project and uses mongo db whole website is live learn lots of hting suring this process ,Now the things you have to is be specific you can add liitle things dont give out of information"
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
