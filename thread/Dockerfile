# Utilisez une image de base avec Node.js
FROM node:14

# Définissez le répertoire de travail
WORKDIR /app

# Copiez package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code de l'application
COPY . .

# Exposez le port sur lequel le service Thread fonctionnera
EXPOSE 80

# Commande pour exécuter l'application
CMD ["node", "app.js"]
