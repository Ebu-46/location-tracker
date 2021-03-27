const Location = require("../models/Location");



// controller actions
module.exports.location_get =async (req, res) => {
  

  try {
    const locations = await Location.find();
    console.log(locations);
    res.status(201).json({ locations });
  }
  catch(err) {
    console.log(err);
    res.status(400).json({ err });
  }
 
}


module.exports.location_post = async (req, res) => {
  const { user_id, lat, lon, comment, image, time } = req.body;

  try {
    const location = await Location.create({ user_id, lat, lon, comment, image, time });
    const locations = await Location.find();
    res.status(201).json({ locations });
  }
  catch(err) {
    res.status(400).json({ err });
  }
 
}
