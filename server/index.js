const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'Hi Luke'
})

app.listen(9000, (err) => {
  if (!err) {
    console.log('app is running at localhost:9000')
  }
})
