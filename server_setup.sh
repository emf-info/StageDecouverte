#!/bin/bash

# Configuration
PROJECT_NAME="SnakeGameBackend"
SCRIPT_DIR=$(dirname "$(readlink -f "$0")") # Répertoire où se trouve le script
PROJECT_PATH="$SCRIPT_DIR/$PROJECT_NAME"
SERVER_URL="https://raw.githubusercontent.com/emf-info/StageDecouverte/refs/heads/main/Backend%20(JS)" # Nouvelle URL pointant sur le répertoire contenant server.js
SERVER_FILE="server.js"

# Étape 1 : Mise à jour du système
echo "Mise à jour du système..."
sudo apt update && sudo apt upgrade -y

# Étape 2 : Installation des outils nécessaires
echo "Installation de curl et wget..."
sudo apt install -y curl wget unzip build-essential
sudo apt install npm

# Étape 3 : Création du répertoire du projet
echo "Création du répertoire du projet..."
mkdir -p "$PROJECT_PATH"

# Étape 4 : Téléchargement du fichier serveur
echo "Téléchargement de $SERVER_FILE..."
wget -q "$SERVER_URL/$SERVER_FILE" -O "$PROJECT_PATH/$SERVER_FILE"
if [ $? -ne 0 ]; then
    echo "Erreur : Impossible de télécharger $SERVER_FILE depuis $SERVER_URL."
    exit 1
fi

# Étape 5 : Installation de Node.js et npm
echo "Installation de Node.js (version LTS) et npm..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Vérification de l'installation de Node.js et npm
if ! command -v node &>/dev/null; then
    echo "Erreur : Node.js n'est pas installé."
    exit 1
fi
if ! command -v npm &>/dev/null; then
    echo "Erreur : npm n'est pas installé."
    exit 1
fi
echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Étape 6 : Lancement du serveur Phidget (si requis)
echo "Vérification de Phidget..."
if command -v phidget22networkserver &>/dev/null; then
    echo "Démarrage du serveur Phidget sur le port 5661..."
    pkill phidget22networkserver 2>/dev/null # Arrête une instance existante
    phidget22networkserver 5661 &
    sleep 2

    if ! netstat -tuln | grep -q ":5661"; then
        echo "Erreur : Le serveur Phidget n'a pas pu démarrer."
        exit 1
    fi
    echo "Le serveur Phidget fonctionne sur le port 5661."
else
    echo "Phidget22 Network Server n'est pas installé. Veuillez l'installer manuellement si nécessaire."
fi

# Étape 7 : Installation des dépendances Node.js
echo "Installation des dépendances Node.js..."
cd "$PROJECT_PATH"
npm install express cors
npm install phidget22


# Étape 8 : Lancement du serveur Node.js
echo "Démarrage du serveur Node.js..."
node server.js
