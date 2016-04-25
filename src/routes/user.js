const gluon = require('gluon');
const generator = require('gluon/generator');
const router = gluon.router();
const user = require('../models/user');

generator(router, user);

module.exports = router;