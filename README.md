# Nodejs Classifields
This is sources of nodejs training online by Dung Vu. it uploading on youtube

## Install

First, you must have mongoDB Server (localhost for dev or cloud mongodb for production).
On localhost for dev tutorial at [Install MongoDB for development](https://www.youtube.com/watch?v=1taGqA7q5nI)

```
$ git clone https://github.com/2pay/Nodejs-classifields.git
$ cd Nodejs-classifields
$ npm install
$ npm start
```

## Config Database
* Edit database file: config/database.js

On localhost with auth of MongoDB

```
dbStr: 'mongodb://mongo_username:mongo_password@mongo_host:mongo_port/mongo_dataname'
```

+ **mongo_username:** your username mongodb
+ **mongo_password:** your password of username mongodb
+ **mongo_host:** your host address or ip address mongodb
+ **mongo_port:** your port mongodb (27017)
+ **mongo_dataname:** your name of databse mongo

On localhost not auth of MongoDB

```
dbStr: 'mongodb://mongo_host:mongo_port/mongo_dataname'
```

+ **mongo_host:** your host address or ip address mongodb
+ **mongo_port:** your port mongodb (27017)
+ **mongo_dataname:** your name of databse mongo

## Youtube Part
* Part 1: [《Part 1: Install》](https://www.youtube.com/edit?o=U&video_id=1taGqA7q5nI)
* Part 2: [《Part 2: Create Project and standard config》](https://www.youtube.com/edit?o=U&video_id=f5jlFb6qf-k)
* Part 3: [《Part 3: Multi languages use i18n》](https://www.youtube.com/edit?o=U&video_id=HuIoaMIv-QA)
* Part 4.1a: [《Part 4.1a: Member register use passport - part 1》](https://www.youtube.com/edit?o=U&video_id=SZQj9-Ln_dc)
* Part 4.1b: [《Part 4.1b: Member register use passport - part 2》](https://www.youtube.com/edit?o=U&video_id=arfCZmIf2Jg)
* Part 4.2a: [《Part 4.2a: Member login use Passport Local](https://www.youtube.com/edit?o=U&video_id=F0KL-CIS164)
* Part 4.2b: [《Part 4.2b: Member login use Passport Facebook》](https://www.youtube.com/edit?o=U&video_id=ULE_Ir-iyN0)

## NodeJS / Express / MongoDB - Build a Shopping Cart
* Part 12 [《Cart Model》](https://www.youtube.com/watch?v=_pVKGCzbMwg)
