const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Company = Sequelize.import("../model/company.js");
Company.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class CompanyService {
    /*
    * 新增
    */
    static async addCompany(data) {
        return await Company.create(data)
    }

    /*
    *  查询详情
    */
    static async getCompany(id) {
        return await Company.findOne({
            where: { id }
        })
    }
    /*
    *  查询列表
    */
    static async getList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Company.findAndCountAll({
                limit: parseInt(pageSize),
                offset: parseInt(pageIndex - 1) * parseInt(pageSize),
                order: [
                    ['sort', 'ASC']
                ]
            });
            return {
                list: list.rows,
                pageIndex: parseInt(pageIndex),
                pageSize: 10,
                total: list.count,
                totalPage: Math.ceil(list.count / pageSize),
            };
        } else {
            const list = await Company.findAll({
                order: [
                    ['sort', 'ASC']
                ]
            });
            return {
                list
            };
        }
    }
    /*
        *  删除
    */
    static async delete(id) {
        return await Company.destroy({
            where: { id }
        })
    }
}

module.exports = CompanyService;