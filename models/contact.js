let mongoose = require('mongoose');

//create a model class 

let contactSchema = mongoose.Schema({
    firstName: String, 
    lastName: String, 
    age: Number}
    , 

    {

        Collection: "first"
    }
); 

module.exports = mongoose.model("test", contactSchema);