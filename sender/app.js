const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to parse URL-encoded bodies

// Endpoint pour créer un message via l'API
app.post('/', async (req, res) => {
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

// Endpoint pour afficher le formulaire
app.get('/form', (req, res) => {
  res.send(`
    <form action="/write" method="post">
      <label for="author">Author:</label>
      <input type="text" id="author" name="author" required><br>
      <label for="content">Content:</label>
      <textarea id="content" name="content" required></textarea><br>
      <input type="submit" value="Submit">
    </form>
<a href="http://185.193.17.146:3000/messages">Liste des messages</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Sender service listening at http://localhost:${port}`);
});
