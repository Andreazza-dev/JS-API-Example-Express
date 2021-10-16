'use strict';

const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const config = require('../configs/example.config');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql'
});

module.exports.query = async function(query, binds){
    let result = await sequelize.query(query, {
        bind: binds,
        type: QueryTypes.SELECT
    });
    console.log(result);
    console.log(JSON.stringify(result[0], null, 2));
    return result;
}
