const router = require('koa-router')()
const BannerService = require("../service/banner");
const CompanyService = require("../service/company");

router.get('/', async (ctx, next) => {
  let banner = await BannerService.getList();
  let company = await CompanyService.getList();
  console.log(JSON.stringify(company), 'company')
  const province = require("../public/javascripts/city");
  await ctx.render('index', {
    title: [
      {
        h2: "找装修",
        h5: "选择优质的装修公司，实现理想家庭",
        child: company.list
      },
      {
        h2: "欣赏设计",
        h5: "精选装修图，给你家的感觉",
        child: [1, 2, 3, 4, 5, 6]
      }, {
        h2: "获取攻略",
        h5: "那些不知道的装修知识，一步get all",
        child: [1, 2, 3, 4, 5, 6]
      }, {
        h2: "免费计算",
        h5: "10秒计算出您的装修预算，让装修更轻松"
      }
    ],
    list: banner.list,
    province: JSON.stringify(province),
  })
})

router.get('company', async (ctx, next) => {
  let data = await CompanyService.getList();
  data.list.map(v => {
    if (v.imgs) {
      v.imgs = v.imgs.split(',')
    }
  })
  await ctx.render('company', {
    company: data.list
  })
})
router.get('design', async (ctx, next) => {
  await ctx.render('design', {
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1]
  })
})
router.get('bbs', async (ctx, next) => {
  await ctx.render('bbs', {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1]
  })
})

router.get('service', async (ctx, next) => {
  await ctx.render('service', {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1]
  })
})

module.exports = router;