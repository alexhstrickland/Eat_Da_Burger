const orm = require("../config/orm.js");

const burger = {
    all(cb) {
      orm.all('burgers', (res) => cb(res));
    },
    create(burgerName, cb) {
      orm.create('burgers', burgerName, (res) => cb(res));
    },
    update(devoured, val, cb) {
      orm.update('burgers', devoured, 'id', val, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  