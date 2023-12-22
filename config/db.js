const mongoose = require('mongoose');

const dataBase = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/self');
    console.log('Database Connected')
}

module.exports={dataBase};