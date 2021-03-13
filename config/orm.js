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
    insertOne(tableName, data, cb) {
      const queryString = 'INSERT INTO ?? SET ?';
      console.log(queryString);
      connection.query(
        queryString,
        [tableName, data],
        (err, result) => {
          if (err) throw err;
          console.log(result);
          cb(result);
        }
      );
    },
    updateOne(tableName, data, col, val, cb) {
      const queryString ='Update ?? SET ? WHERE ?? = ?';
        console.log(queryString);
        connection.query(
          queryString,
          [tableName, data, col, val],
          (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
          }
        );
    }
};

module.exports = orm;