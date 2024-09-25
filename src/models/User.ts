import { DataTypes, Model, } from "sequelize";
import sequelize from "@/connection";

class User extends Model {
    declare id: number;
    declare name: string;
    declare username: string;
    declare password: string;
    declare email: string;
    declare createdAt: Date;
    declare updatedAt: Date

    static associate(models: any) {
        User.belongsTo(models.Request, {
            foreignKey: 'assignedTechId'
        })
    }
}


User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Users",
    sequelize,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
})



export default User;