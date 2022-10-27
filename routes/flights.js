var express = require('express');
//const flights = require('../controllers/flights');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')
// all routes start with /flights

router.get('/',flightsCtrl.index)
router.get('/new',flightsCtrl.new);
router.get('/:id',flightsCtrl.show)
router.post('/',flightsCtrl.create);

module.exports = router;
