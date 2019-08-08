const Router = require('koa-router');
const router = new Router();
const { search, write, deletedata, alter, readingData, readingDataClass } = require('../../sql/sql')
router.post('/', async (ctx, next) => {
    const data = ctx.request.body;
    const readResults = await search(data);
    if (readResults) {
        let obj = {
            status: 200,
            data: readResults
        }
        ctx.body = obj;

    } else {
        ctx.body = {
            status: 404
        };
    }
    next();
})
router.post('/datapath', async (ctx, next) => {
    const data = ctx.request.body;
    const readResults = await readingData();
    ctx.body = readResults;
    next();
})
router.post('/write', async (ctx, next) => {
    const data = ctx.request.body;
    const readResults = await write(data);
    ctx.body = readResults;
    next();
})
router.post('/delet', async (ctx, next) => {
    const data = ctx.request.body;
    const readResults = await deletedata(data);
    ctx.body = readResults;
    next();
})
router.post('/amend', async (ctx, next) => {
    const data = ctx.request.body;
    const readResults = await alter(data);
    ctx.body = readResults;
    next();
})
router.post('/updeta', async (ctx, next) => {
    if (ctx.request.body.id) {
        let form = await readingDataClass(ctx.request.body.id);
        ctx.body = form[0]
    } else {
        let form = {
            label: "",
            batch: "",
            startDate: "",
            address: "",
            status: "",
            dataArr: []
        }
        ctx.body = form;
    }
    next();
})

module.exports = router.routes()