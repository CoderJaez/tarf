import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { options } from '../database/config/config.mjs'

const dbOPtions = <SequelizeOptions>options;
dbOPtions.dialectModule = require("mysql2")

const sequelize = new Sequelize(dbOPtions)

export default sequelize;