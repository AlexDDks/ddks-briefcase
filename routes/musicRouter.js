const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');


router.get('/', musicController.music)

router.get('/music1', musicController.music1)
router.get('/music2', musicController.music2)
router.get('/music3', musicController.music3)
router.get('/music4', musicController.music4)


module.exports = router;