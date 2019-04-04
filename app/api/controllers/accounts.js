const accountModel = require('../models/accounts');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
 create: function(req, res, next) {
  
  accountModel.create({ 
    name: req.body.name, 
    email: req.body.email, 
    password: req.body.password,
    organization:  req.body.organization
  }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Account added successfully!!!", data: null});
    });
 },
login: function(req, res, next) {
  accountModel.findOne({email:req.body.email}, function(err, accountInfo){
     if (err) {
      next(err);
     } else {
      if(accountInfo != null){
        if(bcrypt.compareSync(req.body.password, accountInfo.password)) {
          const token = jwt.sign({id: accountInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
          res.json({
            id: accountInfo._id,
            email: accountInfo.email,
            iorganizationd: accountInfo.organization, 
            api_token:token
          });
        }else{
          res.json({status:"error", message: "Invalid email/password!!!", data:null});
        }
      }else{
        res.json({status:"error", message: "Invalid login!!!", data:null});
      }
     }
    });
 },
}
