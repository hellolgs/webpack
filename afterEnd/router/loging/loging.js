const Router = require('koa-router');
const router = new Router();
const { search, write, deletedata, alter, readingData, readingDataClass } = require('../../sql/sql')
router.get('/remove', async (ctx, next) => {
    ctx.session = null;
    ctx.redirect('/dist/index.html')
    next();
})
router.post('/', async (ctx, next) => {
    const data = ctx.request.body;
    const readResults = await search(data);
    if (readResults) {
        let obj = {
            status: 200,
            data: readResults
        }
        console.log(readResults[0]);
        ctx.session.userdata = {
            username: readResults[0].username,
        };
        ctx.body = obj;

    } else {
        ctx.body = {
            status: 404
        };
    }
    next();
})
router.post('/sess', async (ctx, next) => {
    const username = ctx.session;
    console.log(username)
    if (username.userdata) {
        const obj = {
            username:username.userdata.username
        }
        ctx.body = obj;
    } else {
        const obj = {
            username: 0
        }
        ctx.body = obj;
    }
    // const obj = {
    //     username: 0
    // }
    // ctx.body = obj;
    next();
})

router.post('/datapath', async (ctx, next) => {
    const arr = ctx.request.body;
    const obj = {
        status: 200,
        data: {
            list: arr,
        }
    }
    const readResults = await readingData();
    ctx.body = obj;
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