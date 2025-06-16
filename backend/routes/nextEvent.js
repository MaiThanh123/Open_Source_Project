//TODO nextEvent router 만들기
const express = require('express');
const router = express.Router();
const {getNextEvents} = require('../controllers/nextEventController');

router.get('/', getNextEvents);

module.exports = router;