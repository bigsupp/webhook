const Koa = require('koa')
const app = new Koa()

const config = require('./config')
const router = require('koa-router')()
const koaBody = require('koa-body')

router.get('/', ctx => {
  ctx.type = 'json'
  ctx.body = {
    message: 'webhook'
  }
})

router.post('/webhook', ctx => {
  const body = ctx.request.body
  const query = ctx.request.query
  console.log(`Webhook received, query:`, query, 'body:', body)
  // console.log('webhook received, body:', body);
  const result = 'ok'
  ctx.type = 'json'
  ctx.body = {
    body,
    result
  }
})

app
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
})