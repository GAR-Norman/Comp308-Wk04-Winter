let express = require('express');
let router = express.Router();
let mongooose = require('mongoose'); 

//Create a reference to the db schema

let contact = require('../models/contact');

/* Get Contact List Page - Read Operation */ 
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {

        if(err){

            return console.error(err);
        }

        else{

            console.log(contactList);

            /*
            res.render('contacts/index', {

                title: 'Contact List'

                contactList: contactList
            })
            */
        }
    });
});

module.exports = router;