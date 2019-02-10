let mongoose = require('mongoose');

//create a model class 

let contactSchema = mongoose.Schema({

    name: String, 
    description: String 
    }
    , 

    {

        collection: "favoritethings"
    }
); 

module.exports = mongoose.model('gabenorman', contactSchema);