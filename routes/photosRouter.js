const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photosController');


router.get('/', photosController.photos)

router.get('/photo1', photosController.photo1)
router.get('/photo2', photosController.photo2)
router.get('/photo3', photosController.photo3)
router.get('/photo4', photosController.photo4)
router.get('/photo5', photosController.photo5)


module.exports = router;