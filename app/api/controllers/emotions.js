const emotionModel = require('../models/emotions');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  emotionModel.findById(req.params.id, function(err, emotionInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Emotion found!!!", data:{emotions: emotionInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let emotionsList = [];
emotionModel.find({}, function(err, emotions){
   if (err){
    next(err);
   } else{
    for (let emotion of emotions) {
     emotionsList.push({
       id: emotion._id,
        emotion: emotion.emotion
      });
    }
    res.json({status:"success", message: "Emotion list found!!!", data:{emotion: emotionsList}});
       
   }
});
 },
updateById: function(req, res, next) {
  emotionModel.findByIdAndUpdate(req.params.id,{title:req.body.emotion}, function(err, emotionInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Emotion updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  emotionModel.findByIdAndRemove(req.params.id, function(err, emotionInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Emotion deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  emotionModel.create({ 
      emotion: req.body.emotion
    
        

  }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Emotion added successfully!!!", data: null});
      
    });
 },
}
