var router = require('koa-router')();

// 路由地址
const home = require('./home')
const restful = require('./restful')

router.use('/', home.routes(), home.allowedMethods())
router.use('/v1', restful.routes(), restful.allowedMethods())

module.exports = router;
