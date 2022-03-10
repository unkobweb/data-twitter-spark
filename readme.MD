# Prérequis
Téléchargez [NodeJS](https://nodejs.org/en/) (version 16)
## Utiliser le projet
Pour télécharger les dépendances du projet

    npm install

Renommez le .env.example en .env, puis ajoutez dedans vos clés API Twitter.

Choisissez ici le nom du compte Twitter dont vous voulez récupérer les tweets (par défaut le compte de nodejs)

    const  params  = {screen_name: 'nodejs'};

Lancez le script 

    node index.js

Lancez enfin spark qui se connectera sur le socket sur le port 9999 et lancera la récupération de tweets.