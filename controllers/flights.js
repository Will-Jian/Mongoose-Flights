const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
module.exports = {
    index,
    show,
    new: newFlight,
    create
}


function index(req,res){
    Flight.find({},function(err,flights){
    res.render('flights/index', {flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Detail', flight, tickets });
          });
      });
  }

function newFlight(req,res){
res.render('flights/new')

}

function create(req,res){
    
   for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
   } 


    const flight = new Flight(req.body);
    flight.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /movies in the address bar
      if (err) return res.redirect('/flights/new');
      
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
    }