# Version de node 
FROM node:latest

# Définition du répertoire de travail
WORKDIR /api

# Copie tout l'environnement vers le docker
COPY . .

# Installation des packages
CMD npm install && node server.js