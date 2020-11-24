const { DataTypes, Model } = require('sequelize');
const sequelize = require('../libs/db');
var uniqid = require('uniqid');

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: uniqid(uniqid.time()),
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isAlpha: {
                msg: 'Tilte must be letters only'
            },
            len: {
                args:[3, 15],
                msg: 'Tilte length should be greater than 3 lower than 15'
            },
            notNull: {
                msg: 'Tilte name is required'
            }
        }
    },
    price: {
        type: DataTypes.NUMBER(30),
        allowNull: false,
        validate: {
            len: {
                args:[3, 15],
                msg: 'Price length should be greater than 3 lower than 15'
            },
            notNull: {
                msg: 'Price is required'
            }
        }
    },
    description: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isAlpha: {
                msg: 'Description must be letters only'
            },
            notNull: {
                msg: 'Description is required'
            }
        }
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'url is required'
            }
        }
    },
    backgroundcolor: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Color is required'
            }
        }
    },
    stor: {
        type: DataTypes.NUMBER(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Number is required'
            }
        }
    },

        sequelize,
        modelName: 'Product'
    });
    

    //Product.sync({alter: true})
    
    module.exports = Product;