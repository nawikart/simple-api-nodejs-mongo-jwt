const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
var MongoClient = require('mongodb').MongoClient;

var assert = require('assert');
var DBurl = 'mongodb://localhost:27017/myproject';


var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
}); 

var upload = multer({storage: storage});

router.post('/fileUpload', upload.single('image'), (req, res, next) => {
    MongoClient.connect(DBurl, (err, db) => {
        assert.equal(null, err);
        insertDocuments(db, 'uploads/' + req.file.filename, () => {
            db.close();
            res.json({'message': 'File uploaded successfully'});
        });
    });
});


router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
module.exports = router;



var insertDocuments = function(db, filePath, callback) {
    var collection = db.collection('user');
    collection.insertOne({'imagePath' : filePath }, (err, result) => {
        assert.equal(err, null);
        callback(result);
    });
}

