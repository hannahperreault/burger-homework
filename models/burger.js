const orm = require("../config/orm");

//what is cb?
const burger = {
  selectAll: function (cb) {
    orm.SelectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //both paranthesis need to be updated

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  //both paranthesis need to be updated
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
