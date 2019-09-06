const router = require('koa-router')()
const bannerController = require('../controllers/banner');
const companyController = require('../controllers/company');
// 新增
router.post('/banner', bannerController.add)

router.post('/company', companyController.add)

module.exports = router;