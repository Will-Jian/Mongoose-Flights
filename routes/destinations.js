const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations')
// You Do - Require the yet to be created reviews controller 


// You Do - Define the Route below
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;