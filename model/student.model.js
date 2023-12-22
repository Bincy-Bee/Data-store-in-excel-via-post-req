const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname : {type: String},
    lname : {type: String},
    email : {type: String},
    grig : {type: String},
})

const student = mongoose.model("student", studentSchema);

module.exports = {student};