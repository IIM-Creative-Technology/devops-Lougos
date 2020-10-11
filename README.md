# portfolio

PortFolio
J'ai voulu faire mon portofolio en Vue et Sass


Je n'ai pas pu voir si le projet se mettait bien en place car j'ai eu un problème avec le vue Router et je pense avoir faire de push et Heroku ma bloqu"é je ne peux donc pas accéder à mon site et voir les changement.

Etant nouveaux avec Vue.js ça m'a un peu mis dans le mal et j'en suis désolé.


------------------------------------

name: Init project
uses: actions/checkout@v2

-- Actions checkout de base

- name: Init node.js
uses: actions/setup-node@master

-- Commencement de node.js

- name: Installing project dependencies
run: npm install

-- Install des dépendance de npm

- name: Install Sass
run: npm install -D sass-loader node-sass

-- Installation des dépendence de Sass

- name: Install Vue Router
run: npm install vue-router

-- Router pour pourvoir cliquer sur les liens // Je n'ai pas réussi à le faire fonctionner.

- name: Install Bootstrap
run: npm install vue bootstrap-vue bootstrap

-- Installation de bootstrap

- name: Building the project
run: npm run build

-- Build Du projet

- name: Run Eslint
uses: stefanoeb/eslint-action@1.0.2

-- Lint pour pouvoir corriger les différents erreur en Sass

with:
    files: src/
- name: Deploy to Heroku
uses: akhileshns/heroku-deploy@v3.5.6 # This is the action
with:
    heroku_api_key: ${{secrets.HEROKU_KEY}}
    heroku_app_name: ${{secrets.HEROKU_APP}}
    heroku_email: ${{secrets.HEROKU_EMAIL}}

-- Déployement sur Heroku pour le master

Master sur https://dashboard.heroku.com/apps/portfolio-newgeneration 

