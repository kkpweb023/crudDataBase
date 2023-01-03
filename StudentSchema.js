const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({

        _id:Number,
        name:String,
        age:String,
        email:String

})



module.exports = mongoose.model('students',StudentSchema);