const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
let messages = [];

// Endpoint pour récupérer tout les messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Endpoint pour créer un nouveau message
app.post('/messages', (req, res) => {
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required.' });
  }

  const newMessage = { id: messages.length + 1, author, content, timestamp: new Date() };
  messages.push(newMessage);

  res.status(201).json(newMessage);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}/messages`);
});
