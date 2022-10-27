const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /tickers/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);
// POST /flights/:id/tickets (assoc flight & ticket)


module.exports = router;