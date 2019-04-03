const express = require('express');
const router = express.Router();
const sessionController = require('../app/api/controllers/sessions');
router.get('/', sessionController.getAll);
router.post('/', sessionController.create);
router.get('/:sessionId', sessionController.getById);
router.put('/:sessionId', sessionController.updateById);
router.delete('/:sessionId', sessionController.deleteById);
module.exports = router;
