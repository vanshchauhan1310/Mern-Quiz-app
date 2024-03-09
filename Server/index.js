const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

const path = require('path');

app.use(cors({
    origin : 'http://localhost:3000'
}));
const port = 3001;



const loadQuestions = () => {
    const filePath = './questions.json';
  
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const questions = JSON.parse(fileContent).questions;
  
      questions.forEach(question => {
        console.log(`Question: ${question.question}`);
        console.log(`Options: ${question.options.join(', ')}`);
      });
  
      return questions;
    } catch (error) {
      console.error('Error loading questions:', error);
      return [];
    }
  };

  app.get("/", (req, res) => {
    res.send(loadQuestions());
  })
  
  loadQuestions();



  
app.listen(port, () =>{
    console.log("server is up");
});