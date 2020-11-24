const { DataTypes, Model } = require('sequelize');
const sequelize = require('../libs/db');
var uniqid = require('uniqid');
import User from './user';
import Product from './product';

class Order extends Model { }
Order.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: uniqid(uniqid.time()),
        primaryKey: true
    },
    adress: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Adress is required'
            }
        }
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'State of order is required'
            }
        }
    },
   
        sequelize,
        modelName: 'Order'
    });
    Order.iduser = Order.belongsTo(User.id);
    Order.iddelivery = Order.belongsTo(User.id);
    Order.idproduct = Order.belongsTo(Product.id);
    //Order.sync({alter: true})
    
    module.exports = Order;