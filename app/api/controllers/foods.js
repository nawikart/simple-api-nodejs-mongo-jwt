const foodModel = require('../models/foods');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  foodModel.findById(req.params.foodId, function(err, foodInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Food found!!!", data:{foods: foodInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let foodsList = [];
foodModel.find({}, function(err, foods){
   if (err){
    next(err);
   } else{
    for (let food of foods) {
     foodsList.push({id: food._id, name: food.name, category: food.category});
    }
    res.json({status:"success", message: "Foods list found!!!", data:{foods: foodsList}});
       
   }
});
 },
updateById: function(req, res, next) {
  foodModel.findByIdAndUpdate(req.params.foodId,{name:req.body.name}, function(err, foodInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Food updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  foodModel.findByIdAndRemove(req.params.foodId, function(err, foodInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Food deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  foodModel.create({ name: req.body.name, category: req.body.category }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Food added successfully!!!", data: null});
      
    });
 },
}
