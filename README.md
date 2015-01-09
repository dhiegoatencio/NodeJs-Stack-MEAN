NodeJs-Stack-MEAN
=================

ATENÇÃO: A Aplicação presume que um banco mongo esteja rodando. Escolha uma das opções abaixo:


opção 1 ======== Se for instalar o mongo e usar localmente: ========================


1 - app/config/db.js
2 - deixar a linha referente a localhost
3 - Instalar o mongoDB
4 - Criar a pasta "C:\data\db"
5 - Abrir o shell do win e rodar o comando "mongod"
6 - Abrir outro shell e digitar "node server.js" na pasta do projeto


opção 2 ======== Rodando a aplicação com o mongo da nuvem ========================

1 - app/config/db.js
2 - comentar a linha referente ao localhost e descomentar a outra
3 - no shell do win digitar "node server.js" na pasta do projeto

==================================================================================

Código inicial para aplicação MEAN em Node (Mongo, Express, Angular e Node).
Fontes:

http://scotch.io/bar-talk/setting-up-a-mean-stack-single-page-application.
http://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619?utm_source=nodeweekly&utm_medium=email

-------------