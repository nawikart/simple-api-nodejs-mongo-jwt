const express = require('express');
const router = express.Router();
const mp3Controller = require('../app/api/controllers/mp3');
const mp3Model = require('../app/api/models/mp3');


var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname )
    }
});

var storageMp3 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'media')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname )
    }
});

var storageThumbnail = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'media/thumbnail')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname )
    }
});



var upload = multer({storage: storage});

var uploadMp3Single = multer({storage: storageMp3}).fields(

    [
        { name: 'mp3', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 }
      ]

);

var uploadMp3Multi = multer({storage: storageMp3}).fields(

    [
        { name: 'mp3', maxCount: 8 },
        { name: 'thumbnail', maxCount: 8 }
      ]

);
var uploadThumbnail = multer({storage: storageThumbnail}).single('thumbnail');

router.post('/fileUpload', upload.single('image'), (req, res, next) => {
     

    /*
    mp3Model.create({ title: req.body.title, thumbnail: req.body.thumbnail, mp3:  req.body.mp3}, function (err, result) {
        if (err) 
         next(err);
        else
         res.json({status: "success", message: "Food added successfully!!!", data: null});
        
      });
   */


});

var uploadM = multer({storage: storageMp3}).single('mmm')


var fs = require('fs')




//UPLOAD satu MP3

router.post('/mp3uploadsingle', uploadMp3Single, function (req, res) {

    console.log(req.files["mp3"]);

    var mp3Filename =   req.files["mp3"][0].filename;
    var thumbnailFilename =   req.files["thumbnail"][0].filename;
     
    fs.rename('media/' + mp3Filename , 'media/mp3/' +  mp3Filename , (err)=>{
        if(err){ 
            //nothing
            console.log(err);
            res.json({status: "error", message: "error!!!", data: null});
     
        }
        else 
        {
            //console.log(req.files["mp3"][i].originalname + ' Successfully moved');
            //move to thumbnail folder

           
            fs.rename('media/' + thumbnailFilename , 
            'media/thumbnail/' +  thumbnailFilename , (err)=>{
                if(err) {
                    //nothing
                }
                //else console.log(req.files["thumbnail"][i].originalname + ' Successfully moved');
            });

           
            

            //save to DB
            mp3Model.create({ 
                title: req.body.title, 
                thumbnail: thumbnailFilename, 
                mp3:  mp3Filename
            }, function (err, result) {
                if (err) 
                 next(err);
                else
                 console.log("tersimpan di DB");
              });


            res.json({status: "success", message: "Food added successfully!!!", data: null});
     
            
        }
      });

 

});




//masih error. Race Condition. 
router.post('/mp3uploadmulti', uploadMp3Multi, function (req, res) {

     
    /*
    req.files["thumbnail"].forEach(function(item) {  
    
        console.log(item.originalname);
    })
    */

    for (var i in req.files["mp3"]) {
        //console.log(req.files["mp3"][i]);
        //console.log(req.files["thumbnail"][i]);

        //move to mp3 folder
        fs.rename('media/' + req.files["mp3"][i].originalname , 'media/mp3/' +  req.files["mp3"][i].originalname , (err)=>{
            if(err){ 
                //nothing
            }
            else 
            {
                //console.log(req.files["mp3"][i].originalname + ' Successfully moved');
                //move to thumbnail folder

               
                fs.rename('media/' + req.files["thumbnail"][i].originalname , 'media/thumbnail/' +  req.files["thumbnail"][i].originalname , (err)=>{
                    if(err) {
                        //nothing
                    }
                    //else console.log(req.files["thumbnail"][i].originalname + ' Successfully moved');
                });

               
                

                //save to DB
                mp3Model.create({ 
                    title: req.body.title, 
                    thumbnail: req.files["thumbnail"][i].originalname, 
                    mp3:  req.files["mp3"][i].originalname
                }, function (err, result) {
                    if (err) 
                     next(err);
                    else
                     console.log("tersimpan di DB");
                  });
                
            }
          });

         


         
    }
  
  

    res.json({status: "success", message: "Food added successfully!!!", data: null});
        

});




router.post('/', mp3Controller.create);
 
module.exports = router;
