const express = require('express');
const router = express.Router();
const notificationsController = require('../app/notificationsController')

router.post('/send', notificationsController.send);



module.exports = router;
