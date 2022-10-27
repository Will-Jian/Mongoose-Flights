const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



const destinationSchema = new Schema({
    airport: {
      type: String,
      required: true
    },
    arrival: {
      type: Date,
     
    }
  });


const flightSchema = new Schema({
    airline: {type: String, enum: ['American','SouthWest','United','JetBlue']},
    airport: {type: String, enum: ['AUS','DFW','DEN','LAX','SFO'], default: "DEN"},
    flightNo: {type: Number, min: 10, max: 9999},
    departs: {type: Date, default: function(){
        return new Date().setFullYear(new Date().getFullYear() + 1)
    }},
    destinations: [destinationSchema],
    

  }, {
    timestamps: true
  });


  module.exports = mongoose.model('Flight', flightSchema);