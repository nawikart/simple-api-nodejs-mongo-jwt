const sessionModel = require('../models/sessions');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  sessionModel.findById(req.params.sessionId, function(err, sessionInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Session found!!!", data:{sessions: sessionInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let sessionsList = [];
sessionModel.find({}, function(err, sessions){
   if (err){
    next(err);
   } else{
    for (let session of sessions) {
     sessionsList.push({
       id: session._id,
        category: session.category, title: session.title,
       description: session.description, mp3_url: session.mp3_url,
       length: session.length
      });
    }
    res.json({status:"success", message: "Session list found!!!", data:{session: sessionsList}});
       
   }
});
 },
updateById: function(req, res, next) {
  sessionModel.findByIdAndUpdate(req.params.sessionId,{title:req.body.title}, function(err, sessionInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Session updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  sessionModel.findByIdAndRemove(req.params.sessionId, function(err, sessionInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Session deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  sessionModel.create({ 
      category: req.body.category, title: req.body.title,
       description: req.body.description, mp3_url: req.body.mp3_url,
       length: req.body.length
    
        

  }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Session added successfully!!!", data: null});
      
    });
 },
}
