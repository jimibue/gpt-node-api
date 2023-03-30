
## Creating an Express/Sequelize app with a Postgres database

```
$ mkdir myapp
$ cd myapp
$ npm init
$ npm install express sequelize pg pg-hstore cors --save
$ npm install sequelize-cli nodemon --save-dev
$ npx sequelize init
$ npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

```


## Render

npm install dotenv --save