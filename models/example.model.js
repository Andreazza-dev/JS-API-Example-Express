'use strict';

module.exports.exampleQuery = async function(){
    let sql = 'SELECT * FROM user WHERE name <= $userName';
    let binds = {
        userName: 'admin'
    };

    let data = await db.query(sql, binds);
    return data;
}
