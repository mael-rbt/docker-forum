-- Créez une table pour stocker les messages
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  author VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
