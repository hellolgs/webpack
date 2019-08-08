const Router = require('koa-router');
const router = new Router();
const loging = require('./loging/loging');
router.use('/loging',loging)
module.exports = router;