const { Router } = require('express');
const router = Router();

router.get('/log', require('./getlog.js'));

module.exports = router;