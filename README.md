# Socket.IO Quick Start

https://nodejs.org/en/

Télécharger LTS ( Recommended For Most Users )

# 1er option ( installation globale )

Invite de commandes ( cmd ) :
    
    npm i -g socket.io
    
Changer cette ligne dans app.js :

  ```js
  const io = require("socket.io")
  ```
   par
   
 ```js
 const io = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/socket.io")
 ```
  
# 2e option ( installation local )

Dans le dossier où se trouve **app.js** et **index.html**, fait shift + clique droit puis "Ouvrir une fenetre de commande ici".

SHIFT + Clique Droit -> Ouvrir une fenetre de commande ici
     
     npm i socket.io
     
# Démarrer le chat

SHIFT + Clique Droit -> Ouvrir une fenetre de commande ici
    
    node app
    
Clique sur **index.html** pour ouvrir la page web.

Ouvre plusieurs page **index.html** pour créer des nouveaux utilisateurs. 
