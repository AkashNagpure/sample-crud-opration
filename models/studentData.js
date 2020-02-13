const mongoose = require('mongoose');
var Schema = mongoose.Schema; 

const student = mongoose.Schema({   
    stud_name : { type: String, required: true},
    stud_mobile : { type: Number },
    stud_email : { type: String },
    stud_class : { type: String },
    stud_stream : { type: String },
    stud_college : { type: String },
    stud_address : { type: String },
});
  
module.exports = mongoose.model('student', student);
