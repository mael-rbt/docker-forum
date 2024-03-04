const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8081;

app.use(bodyParser.json());

// Endpoint pour récupérer tout les messages de l'API
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://api:3000/messages');
    const messages = response.data;

    // Construire une liste des messages avec les auteurs
    const messagesWithAuthors = messages.map(message => {
      return {
        id: message.id,
        author: message.author,
        content: message.content,
        timestamp: message.timestamp
      };
    });

    res.json(messagesWithAuthors);
  } catch (error) {
    console.error('Error fetching messages from API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Thread service listening at http://localhost:${port}`);
});
