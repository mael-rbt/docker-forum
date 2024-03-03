# Utilisez l'image PostgreSQL officielle
FROM postgres:latest

# Définissez les variables d'environnement pour la configuration de la base de données
ENV POSTGRES_DB=myforumdb
ENV POSTGRES_USER=myforumuser
ENV POSTGRES_PASSWORD=myforumpassword

# Copiez les scripts d'initialisation dans le répertoire d'initialisation de PostgreSQL
COPY init.sql /docker-entrypoint-initdb.d/