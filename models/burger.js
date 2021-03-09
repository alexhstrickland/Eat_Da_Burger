const orm = require("../config/orm.js");

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(burgerName, cb) {
      orm.insertOne('burgers', burgerName, (res) => cb(res));
    },
    updateOne(devoured, val, cb) {
      orm.updateOne('burgers', devoured, 'id', val, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  