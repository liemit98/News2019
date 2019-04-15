var express = require('express');
var user = require('./controller/user.control')

const router = express.Router()

router.route('/api/list')
    .get(user.list)
router.route('/api/threeItem')
    .get(user.threeItem)
router.route('/api/thoisu')
    .get(user.thoisu)
router.route('/api/phapluat')
    .get(user.phapluat)
router.route('/api/dulich')
    .get(user.dulich)
router.route('/api/tin/:tua')
    .get(user.tin)
module.exports = router;
