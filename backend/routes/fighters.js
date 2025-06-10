const express = require('express');
const router = express.Router();
const { getFighterByName, getFightersByWeightClass } = require('../controllers/fighterController');

router.get('/:name', getFighterByName);
router.get('/weight/:weight_class', getFightersByWeightClass);

module.exports = fighterRoutes;
