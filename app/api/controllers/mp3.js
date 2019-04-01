const mp3Model = require('../models/mp3');
module.exports = {
  
   
create: function(req, res, next) {
  mp3Model.create({ title: req.body.title, thumbnail: req.body.thumbnail, mp3:  req.body.mp3}, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Food added successfully!!!", data: null});
      
    });
 },
 

}
