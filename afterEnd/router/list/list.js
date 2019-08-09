const Router = require('koa-router');
const router = new Router();
const {readingData} = require('../../sql/sql')
router.post('/', async (ctx, next) => {
    const arr = ctx.request.body;
    
    const readResults = await readingData();
    const obj = {
        status:200,
        err:'',
        data:{
            list:readResults,
        },
    }
    ctx.body = obj;
    next();
})

module.exports = router.routes()