const express = require('express');
const router = express.Router();
const { getFighterByName, getFightersByWeightClass, getFighter } = require('../controllers/fighterController');

router.get('/', getFighter);
router.get('/:name', getFighterByName);
router.get('/weight/:weight_class', getFightersByWeightClass);

module.exports = router;
