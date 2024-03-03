const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Endpoint pour créer un message via l'API
app.post('/write', async (req, res) => {
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required.' });
  }

  try {
    const response = await axios.post('http://api:3000/messages', { author, content });
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error writing message via API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Sender service listening at http://localhost:${port}`);
});
