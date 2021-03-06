const Contact = require('../models/Contact');
const jwt = require('jsonwebtoken');

function addContact(req, res) {
    // add contact to database
    var Name = req.body.contact.name;
    var phone = req.body.contact.phone;
    var email = req.body.contact.email;
    var description = req.body.contact.description;
    console.log(Name,phone,email,description)
    
    Contact.create({
        name: Name,
        email: email,
        description:description,
        phoneNumber: phone
    })
        .then(response => {
            res.json({
                data: response,
                valid: true,
                message: "description added successfuly"
            })
        })
        .catch(err => {
            let errMsg = [];
            err.errors.map(element => {
                errMsg.push(element.message);
            })
            res.json({
                valid: false,
                error: errMsg
            })
        })
        console.log("cree")
}
function getContacts(req, res) {
    Contact.findAll()
    .then(response => {
        if (response) {
                res.status(200).json({
                valid: true,
                data: response.dataValues
            });
        }else {
            res.status(404).json({
                valid: false,
                error: 'Contact not found'
            })
        }
    })
}
function getContact(req, res) {
    const username = req.params.name;
    const email = req.params.email;
    User.findAll({where: {
        rank: {
            [Op.or]: {
                name: username ,
                email:email
            }
        }
    } })
    .then(response => {
        if (response) {
            // Contact found
            res.status(200).json({
                valid: true,
                data: response.dataValues
            });
        }else {
            res.status(404).json({
                valid: false,
                error: 'Contact not found'
            })
        }
    })
    .catch(err => {
        res.status(404).json({
            valid: false,
            error: 'User error'
        })
    })
}
module.exports = {
    addContact,
    getContacts,
    getContact
}