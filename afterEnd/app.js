const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const session = require('koa-session');
const body = require('koa-body');
const path = require('path');
const router = require('./router/router');
const cookle = require('cookie-parser');
// app.use(cookle('aaa'))
app.use(session({
    key: "koa:sess",
    maxAge: 100000000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
}, app))
app.keys = ['koa-web-site']
app.use(body({
    multipart: true,
    formidable: {
        maxFieldsSize: 200 * 1024 * 1024
    }
}))
app.use(static(path.join(__dirname, 'static')));
app.use(router.routes())
app.use((ctx,next) => {
    ctx.set('Access-Control-Allow-Origin','*');  
    ctx.set('Access-Control-Allow-Credentials', true)
    ctx.set("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
})
app.listen(4000, err => {
    console.log('ok')
})