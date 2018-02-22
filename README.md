# JP Shop Website
This is sources of nodejs create Shopping cart Website

## Install

First, you must have mongoDB Server (localhost for dev or cloud mongodb for production).
On localhost for dev tutorial at [Install MongoDB for development](https://www.youtube.com/watch?v=1taGqA7q5nI)

```
$ git clone https://github.com/hachuc/jpshop.git
$ cd jpshop
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

## NodeJS / Express / MongoDB - Build a Shopping Cart
* Part 12 [《Cart Model》](https://www.youtube.com/watch?v=_pVKGCzbMwg)