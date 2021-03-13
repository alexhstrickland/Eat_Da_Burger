const orm = require("../config/orm.js");

const burger = {
    all(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    create(data, cb) {
      orm.insertOne('burgers', data, (res) => cb(res));
    },
    update(data, id, cb) {
      orm.updateOne('burgers', data, 'id', id, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  