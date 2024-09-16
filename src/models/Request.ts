// import Office from "@/models/Office";
// import User from '@/models/User'
import { Model, DataTypes } from "sequelize";
import sequelize from "@/connection";

class Request extends Model {
    declare id: number;
    declare name: string;
    declare contactNo: string | null;
    declare agreedTimeline: string | null;
    declare dateRequested: Date;
    declare equipmentType?: string | null;
    declare brand: string | null
    declare propertyNo: string | null;
    declare serialNo: string | null;
    declare remarks: string | null;
    declare recommendation: string | null;
    declare assignedTechId: number | null;
    declare dateDone: Date

    static associate(models: any) {

        Request.hasOne(models.User, {
            foreignKey: 'assignedTechId'
        })
        Request.belongsTo(models.Office, {
            foreignKey: 'officeId'
        })
    }

}

Request.init({
    id: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,

    },
    agreedTimeline: {
        type: DataTypes.STRING,

    },
    dateRequested: {
        type: DataTypes.DATE
    },
    equipmentType: {
        type: DataTypes.STRING
    },
    brand: {
        type: DataTypes.STRING,

    },
    propertyNo: {
        type: DataTypes.STRING
    },
    serialNo: {
        type: DataTypes.STRING
    },
    remarks: {
        type: DataTypes.STRING
    },
    recommendation: {
        type: DataTypes.STRING
    }, assignedTechId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    dateDone: {
        type: DataTypes.DATE
    }

}, {
    tableName: 'Requests',
    sequelize,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
})





export default Request;

