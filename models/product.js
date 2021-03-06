const { DataTypes, Model } = require('sequelize');
const sequelize = require('../libs/db');
var uniqid = require('uniqid');


class Product extends Model { }

Product.init({
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isAlpha: {
                msg: 'Tilte must be letters only'
            },
            len: {
                args:[3, 30],
                msg: 'Tilte length should be greater than 3 lower than 15'
            },
            notNull: {
                msg: 'Tilte name is required'
            }
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            
            notNull: {
                msg: 'Price is required'
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
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
        type: DataTypes.STRING(50),
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
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Number is required'
            }
        }
    },
    category:{
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'category is required'
            }
        }
    },
    discount:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'discount is required'
            }
        }
    }
},{

        sequelize,
        modelName:'Product'
    });
    

    //Product.sync({alter: true})
    
    module.exports = Product;