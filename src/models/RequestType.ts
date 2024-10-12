import { Model, DataTypes } from "sequelize";
import sequelize from "@/connection";

class RequestType extends Model {
    declare id: number;
    declare type: string;
    declare subtype: string;
    declare requestId: string;
    declare SubTypes: any;
}

RequestType.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtype: {
        type: DataTypes.STRING,
    },
    requestId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'RequestTypes',
            key: 'id'
        }
    }

}, {
    tableName: 'RequestTypes',
    sequelize,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
})

RequestType.hasMany(RequestType, {
    as: 'SubTypes',
    foreignKey: 'requestId'
})

RequestType.hasOne(RequestType, {
    as: 'MainType',
    foreignKey: 'requestId',
})


export default RequestType;


