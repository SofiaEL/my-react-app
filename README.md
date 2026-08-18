# My React App — Production Deployment on Ubuntu VM with Nginx

Déploiement complet d’une application React sur une VM Ubuntu avec Nginx, incluant build, configuration serveur, permissions Linux, optimisation et exposition via IP publique. Ce projet fait partie de mon portfolio DevOps, démontrant ma capacité à déployer une application front-end dans un environnement Linux réel

# Objectifs du projet
Construire une application React en mode production

Déployer l’application sur un serveur Ubuntu

Configurer Nginx pour servir des fichiers statiques

Gérer les permissions Linux (www-data)

Exposer l’application via une IP publique

Vérifier le fonctionnement via curl et navigateur

# Stack Technique
React.js

Node.js / npm

Ubuntu Server 22.04

Nginx

Git & GitHub

Linux (bash)

# Architecture
React App → Build → Ubuntu VM → Nginx → Public IP → Browser

# Structure du Projet
```
my-react-app/ ├── public/ ├── src/ ├── build/ ├── Dockerfile ├── package.json └── README.md
```

# Étapes de Déploiement
Installer Node.js & npm
sudo apt update sudo apt install -y nodejs npm node -v npm -v

Installer et activer Nginx
sudo apt install -y nginx sudo systemctl start nginx sudo systemctl enable nginx systemctl status nginx

Cloner l’application depuis GitHub
git clone https://github.com/SofiaEL/my-react-app.git cd my-react-app

Installer les dépendances & générer le build
npm install npm run build Un dossier build/ est généré avec les fichiers statiques prêts pour la production.

Déployer les fichiers build dans Nginx
sudo rm -rf /var/www/html/* sudo cp -r build/* /var/www/html/ sudo chown -R www-data:www-data /var/www/html sudo chmod -R 755 /var/www/html

Configurer Nginx pour React
echo 'server { listen 80; server_name _; root /var/www/html; index index.html;

location / {
    try_files $uri /index.html;
}

error_page 404 /index.html;
}' | sudo tee /etc/nginx/sites-available/default > /dev/null

sudo systemctl restart nginx

# Récupérer l’IP publique & accéder à l’application
curl ifconfig.me

# Accès via navigateur :
http://

Vérification
curl

Si la page HTML s’affiche → l’application est déployée avec succès.

# 🎓 Ce que j’ai appris

Déploiement d’une application React en environnement Linux

Configuration Nginx pour servir des fichiers statiques

Gestion des permissions Linux (www-data)

Build d’une application front-end

Exposition d’une application via IP publique

Dépannage Nginx & logs système

Organisation d’un projet DevOps pour un portfolio professionnel

🔗 Repository GitHub https://github.com/SofiaEL/my-react-app (github.com in Bing)
