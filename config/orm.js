const connection = require('./connection.js');

const orm = {
    selectAll(tableName, cb) {
      const queryString = 'SELECT * FROM ??';
      connection.query(
        queryString,
        [tableName],
        (err, result) => {
          if (err) throw err;
          console.log(result);
          cb(result);
        }
      );
    },
    insertOne(tableName, burgerName, cb) {
      const queryString = 'INSERT INTO ?? SET ?';
      console.log(queryString);
      connection.query(
        queryString,
        [tableName, burgerName],
        (err, result) => {
          if (err) throw err;
          console.log(result);
          cb(result);
        }
      );
    },
    updateOne(tableName, devoured, col, val, cb) {
      const queryString ='Update ?? SET ? WHERE ?? = ?';
        console.log(queryString);
        connection.query(
          queryString,
          [tableName, devoured, col, val, cb],
          (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
          }
        );
    }
};

module.exports = orm;