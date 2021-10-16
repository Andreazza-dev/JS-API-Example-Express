'use strict';

module.exports.exampleQuery = () => {
    let sql = 'SELECT * FROM EXAMPLE WHERE user = :userName';
    let binds = {
        userName: 'admin',
    };
    return sql.query(sql, binds);
}
