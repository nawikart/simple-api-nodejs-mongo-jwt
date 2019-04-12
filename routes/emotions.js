const express = require('express');
const router = express.Router();
const emotionController = require('../app/api/controllers/emotions');
router.get('/', emotionController.getAll);
router.post('/', emotionController.create);
router.get('/:id', emotionController.getById);
router.put('/:id', emotionController.updateById);
router.delete('/:id', emotionController.deleteById);
module.exports = router;
