const express = require('express');
const router = express.Router();
const userAuth = require('../middlewares/user.auth');
const adminAuth = require('../middlewares/admin.auth');
const superAdminAuth = require('../middlewares/superadmin.auth');
const odrerController = require('../controllers/order');
const Order = require('../models/order');
/**
 * Add Order
 */
router.post('/add', (req, res) => {
  odrerController.addOrder(req, res);
  
    
});

/**
* Get all Order 
*/
  router.get('/contact',adminAuth,(req, res) => {
    odrerController.getOrders(req, res);
  })


  /**
* Get Order by id
*/
router.get('/get/:id',adminAuth,(req, res) => {
  odrerController.getOrder(req, res);
})
/**
 * Edit Order
 */

router.post('/edit/:id', adminAuth, (req, res) => {
  odrerController.editOrder(req,res);
  });

module.exports = router;