import { Model, DataTypes } from "sequelize";
import sequelize from "@/connection";

class Office extends Model {
    declare id: number;
    declare name: string;
    declare acronym: string;
}

Office.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(),
            allowNull: false
        },
        acronym: {
            type: new DataTypes.STRING(),
            allowNull: false
        }
    }, {
    tableName: 'Offices',
    sequelize,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
}
)


export default Office