// banner
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('banner', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        img:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "img"    
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "url"      
        },
        sort:{   // 排序
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "sort"
        }
    })
}