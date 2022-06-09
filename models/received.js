// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const receivedSchema = mongoose.Schema({
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
    bookreceived: {
        type: String, 
        required: true
    }
   
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Received', receivedSchema);