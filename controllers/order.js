const Order = require('../models/product');
const jwt = require('jsonwebtoken');

function addOrder(req, res) {
    // add user to database
    var tableproduct = req.params.products;
    var tablenproduct=req.params.nproducts;
    var adress = req.body.adress;
    var iduser = req.params.iduser;
   
    for (let index = 0; index < idproduct.length; index++) {
        
    Order.create({
        adress: adress,
        iduser: iduser,
        idproduct:tableproduct[index],
        nproduct:tablenproduct[index],
        state:null,
    })
        .then(response => {
            res.json({
                data: response,
                valid: true,
                message: "Product added successfuly"
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
    }
}
function getOrders(req, res) {
    Product.findAll()
    .then(response => {
        if (response) {
            // user found
            res.status(200).json({
                valid: true,
                data: response.dataValues
            });
        }else {
            res.status(404).json({
                valid: false,
                error: 'User not found'
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
function getOrder(req, res) {
    const iduser = req.params.iduser;
    const iddelivery = req.params.iddelivery; 
    User.findAll({where:{ 
        rank: {
        [Op.or]: {
            iduser: iduser,
            iddelivery: iddelivery
        }}
    } })
    .then(response => {
        if (response) {
            // product found
            res.status(200).json({
                valid: true,
                data: response.dataValues
            });
        }else {
            res.status(404).json({
                valid: false,
                error: 'product not found'
            })
        }
    })
    .catch(err => {
        res.status(404).json({
            valid: false,
            error: 'product error'
        })
    })
}
function editOrder(req, res) {
    const id = req.params.id;
    var tableproduct = req.params.products;
    var adress = req.body.adress;
    var tablenproduct=req.params.nproducts;
    for (let index = 0; index < idproduct.length; index++) {
    Product.update({ 
        adress: adress,
        idproduct:tableproduct[index],
        nproduct:tablenproduct[index],
        state:false,
         }, {
        where: {id:id,
        }
        }
        .then(response => {
            if (response) {
                // user found
                res.status(200).json({
                    valid: true,
                    data: response.dataValues
                });
            }else {
                res.status(404).json({
                    valid: false,
                    error: 'User not found'
                })
            }
        })
        .catch(err => {
            res.status(404).json({
                valid: false,
                error: 'User error'
            })
        })
      );
    }
}

module.exports = {
    addOrder,
    getOrder,
    editOrder,
    getOrders
}