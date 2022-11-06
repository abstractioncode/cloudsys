# Cloud configuration System
simply cloud system for your cheat/idk
# Installation
```
cd cloudsys
npm i
```
# Setup Mysql
open ./src/app.module.ts
```
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'pass',
  database: 'your database',
```
# To get parametrs and api callbacks
```
cd cloudsys
npm run start:dev
```
# Atleast u need to open the docs ->
open browser and go to (http://localhost:3000/ "Api docs") - auto generated

#Tasks 
- [x] simplify get/delete/update config
- [ ] add lua cloud system

