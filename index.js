const express = require('express');
const app = express();
const { dataBase } = require('./config/db');
const { router } = require('./routes/student.route');

app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.set("view engine", "ejs");
app.set("views",  __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(router)





app.listen(8090, ()=>{
    console.log('server listening  on port http://localhost:8090');
    dataBase();
})