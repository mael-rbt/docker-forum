const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 80;

app.use(bodyParser.json());

// Endpoint pour récupérer tout les messages de l'API
app.get('/messages', async (req, res) => {
  try {
    const response = await axios.get('http://api:3000/messages');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching messages from API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Thread service listening at http://localhost:${port}`);
});
