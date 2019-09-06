// company
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('company', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "logo"
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "name"
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "phone"
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "address"
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "content"
        },
        imgs: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "imgs"
        },
        sort: {   // 排序
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "sort"
        }
    })
}