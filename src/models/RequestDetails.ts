import { Model, DataTypes } from "sequelize";
import RequestType from "./RequestType";
import sequelize from "@/connection";

class RequestDetail extends Model {
    declare id: number;
    declare requestTypeId: number;
    declare requestId: number;
    declare RequestType: RequestType

}

RequestDetail.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        requestTypeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'RequestTypes',
                key: 'id'
            }
        },
        requestId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'Requests',
                key: 'id'
            }
        }
    }, {
    tableName: 'RequestDetails',
    sequelize,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
}
)


RequestDetail.belongsTo(RequestType, {
    foreignKey: 'requestTypeId'
})


export default RequestDetail