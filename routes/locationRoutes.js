const { Router } = require('express');
const locationController = require('../controllers/locationController');

const router = Router();

router.get('/api/location', locationController.location_get);
router.post('/api/location', locationController.location_post);


module.exports = router;