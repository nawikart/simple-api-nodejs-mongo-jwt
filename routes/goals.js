const express = require('express');
const router = express.Router();
const goalsController = require('../app/api/controllers/goals');
router.get('/', goalsController.getAll);
router.post('/', goalsController.create);
router.get('/:goalId', goalsController.getById);
router.put('/:goalId', goalsController.updateById);
router.delete('/:goalId', goalsController.deleteById);
module.exports = router;
