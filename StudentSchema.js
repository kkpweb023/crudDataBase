const mongoose = require('mongoose');
const autoIncr = require('mongoose-auto-increment');

const StudentSchema = new mongoose.Schema({

        _id:Number,
        name:String,
        age:String,
        email:String

})

autoIncr.initialize(mongoose.connection);
StudentSchema.plugin(autoIncr.plugin,'students')


module.exports = mongoose.model('students',StudentSchema);