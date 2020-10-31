const { Router } = require('express');
const router = Router();

router.get('/log', require('./getlog.js'));
router.get('/download', require('./getfile.js'));
router.get('/', require('./navbar.js'));


module.exports = router;
