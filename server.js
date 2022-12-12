const express = require('express');
const mysql = require('promise-mysql');
require('dotenv').config();

const categoriesRoutes = require('./routes/categoriesRoute');
const toysRoutes = require('./routes/toysRoute');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extented : true}));

const connectionOptions = {	
	host: "localhost",
	database: "SantaMW",
	user: "root",
	password: "",
	port: 3306
}

mysql.createConnection(connectionOptions)
        .then(async(db) => {
            categoriesRoutes(app, db);
            toysRoutes(app, db);
        })


app.listen(port,()=> {
    console.log(`We are connected to port : ${port}`);
})

