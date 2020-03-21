const Koa = require('koa');

const path = require('path');
const Router = require('koa-router');
const ejs = require('koa-ejs');
const static = require('./static');
let server = new Koa();
server.listen(80);

ejs(server,{
    root:path.resolve(__dirname,'template'),
    layout:false,
    viewExt:'ejs',
    cache:false,
    debug:false
})

let router = new Router();
router.get('/', async ctx=>{

    await ctx.render('index',{
     
      });
})
router.post('/success', async ctx=>{


   ctx.body = 'success';

})
static(router);//只要是文件结尾
server.use(router.routes());