const mongoose = require('mongoose');


const locationSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: false
  },
  lat: {
    type: String,
    required: [true, 'Please enter latitude']
    
  },
  lon: {
    type: String,
    required: [true, 'Please enter longitude']
    
  },
  comment: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  time: {
    type: String,
    required: false
  }

},{ timestamps: true });


// fire a function before doc saved to db
// userSchema.pre('save', async function(next) {
  
//   next();
// });


const Location = mongoose.model('location', locationSchema);

module.exports = Location;