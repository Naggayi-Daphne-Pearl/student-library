// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const takenSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    phonenumber: {
        type: Number, 
        required: true
    },
    nin: {
        type: String, 
        required: true
    },  
    booktaken: {
        type: String, 
        required: true
    }, 
    cohort : {
        type: String, 
        required: true
    }
   
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Taken', takenSchema);