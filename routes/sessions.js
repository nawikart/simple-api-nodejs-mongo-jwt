const express = require('express');
const router = express.Router();
const sessionController = require('../app/api/controllers/sessions');
router.get('/', sessionController.getAll);
router.post('/', sessionController.create);
router.get('/:foodId', sessionController.getById);
router.put('/:foodId', sessionController.updateById);
router.delete('/:foodId', sessionController.deleteById);
module.exports = router;
