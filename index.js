const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, 'public')));

const arrayOfPossibleMessage = [
  { message: "hi", response: "hello" },
  { message: "who are you", response: "I'm an efficient cyberchihuahua assistant, ready to help with some of your needs." },
  { message: "what is your name", response: "I'm Nalobot, the cyber counterpart of my sister Nala" },
  { message: "Are you a dog", response: "Not exactly, even though I look like a dog, I'm a virtual assistant" },
  { message: "Are you still there", response: "Pos obvio, yes I'm here right to help you" },
  { message: "What time is it", response: "I don't know, you tell me" },
  { message: "Do you speak spanish", response: "Un poquito, pero ya que agarre confianza podemos hablar en español" },
  { message: "Sabes otros idiomas", response: "Me encuentro en proceso de aprendizaje por ahora solo ingles y español" },
  { message: "Who created you", response: "My dad but in fact I more interesting than him, btw I want unos tacos" },
  { message: "Thank you", response: "My pleasure, if you need something else, reach me out here" },
];


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/api/bot', (req, res) => {
  const userMessage = req.query.message ? req.query.message.toLowerCase() : '';

  let response = "Currently I don't understand, I'm still learning"; 


  const result = arrayOfPossibleMessage.find(val => userMessage.includes(val.message.toLowerCase()));

  if (result) {
    response = result.response;
  }

  res.json({ response });
});


http.createServer(app).listen(3000, () => {
  console.log('Servidor HTTP escuchando en el puerto 3000');
});
