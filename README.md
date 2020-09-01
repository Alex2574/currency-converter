# currency-converter
Convert selected currency.

Aplication uses Rest API: 
GET `http://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=EU`

More details `https://www.lb.lt/webservices/FxRates/`

# Used additional libraries

## For Angular

Bootstrap - Css framework

## For Node

axios -used to make http requests from node.js

body-parser - used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.

cors - used to fix cors domain issue

mongoose - used to simple way connect to MongoDB, simplyfies work with DB.

morgan - used to show http logs

xml2json - used to parse XML to JSON.

# REST API locally
DB works on URL `mongodb://localhost:27017/convert-currency`

Save current currency rates to DB `http://localhost:5000/saveCurrentFxRates`
 
Get currency rates from DB `http://localhost:5000/getCurrencyFxRates`
 
Save user activity in DB  `http://localhost:5000/saveUserActivity`

# for local development
To work locally you must to repalce `docker-compose.yml` with ` docker-compose.yml.dev`

run DB container `docker-compose up` 

run server in dev mode `npm start`

run angular in dev mode `npm start`

run unit tests `npm test`

# run Docker containers locally
run DB, Angular and Node containers `docker-compose up`

YAML configuration:

server uses cmd `npm run dev`

angular uses cmd `npm start`

# docker DB
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

build docker images `docker-compose build`

run containers `docker-compose up` 

## docker cmd
Container log `docker logs $(sudo docker ps -aq --filter name=node-api)`

# Tools for DB
To check data `MongoDB Compass`

Connect to DB locally `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`


