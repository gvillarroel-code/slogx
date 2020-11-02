const { Router } = require('express');
const router = Router();

router.get('/', require('./homepage.js'));
router.get('/log', require('./getlog.js'));
router.get('/download', require('./getfile.js'));
router.get('/status', require('./status.js'));


module.exports = router;
