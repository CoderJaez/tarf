// import Office from "@/models/Office";
// import User from '@/models/User'
import { Model, DataTypes } from "sequelize";
import sequelize from "@/connection";
import moment from "moment";
import Office from "./Office";
import User from "./User";

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
    declare dateDone: Date | null
    declare code: string
    declare officeId: number;
    declare Office: Office;
    declare User: User | null

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
    officeId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Offices',
            key: 'id'
        }
    },
    dateDone: {
        type: DataTypes.DATE
    },
    code: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'Requests',
    sequelize,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hooks: {
        beforeCreate: async (request, options) => {
            const yearMonth = moment().format('YYYYMM')
            const lastRequest = await Request.findOne({
                order: [['createdAt', 'DESC']]
            })
            let nextNumber = '0001';
            if (lastRequest && lastRequest.code) {
                const lastRequestCode = lastRequest.code;
                const lastSequence = parseInt(lastRequest.code.split('-')[1]);
                nextNumber = String(lastSequence + 1).padStart(4, '0')
            }

            request.code = `${yearMonth}-${nextNumber}`
        }
    }
})

Request.hasOne(Office, {
    foreignKey: 'id'
})


Request.hasOne(User, {
    foreignKey: 'id'
})


export default Request;

