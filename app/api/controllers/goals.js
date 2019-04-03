const goalModel = require('../models/goals');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  goalModel.findById(req.params.goalId, function(err, goalInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Goal found!!!", data:{goals: goalInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let goalsList = [];
goalModel.find({}, function(err, goals){
   if (err){
    next(err);
   } else{
    for (let goal of goals) {
      goalsList.push({category: goal.category, description: food.description, id: food.id, percent_completed: food.percent_completed, status: food.status, session_id: food.session_id });
    }
    res.json({status:"success", message: "Goals list found!!!", data:{goals: goalsList}});
       
   }
});
 },
updateById: function(req, res, next) {
  goalModel.findByIdAndUpdate(req.params.goalId,{description:req.body.description}, function(err, goalInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Goal updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  goalModel.findByIdAndRemove(req.params.goalId, function(err, goalInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Goal deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  goalModel.create({ 
    
    category: req.body.category, description: req.body.description, id: req.body.id, 
    percent_completed: req.body.percent_completed, status: req.body.status, 
    session_id: req.body.session_id, 

     
  
  }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Goal added successfully!!!", data: null});
      
    });
 },
}
