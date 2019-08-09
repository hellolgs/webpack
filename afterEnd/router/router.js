const Router = require('koa-router');
const router = new Router();
const loging = require('./loging/loging');
const list = require('./list/list');
router.use('/loging',loging)
router.use('/list',list)
module.exports = router;