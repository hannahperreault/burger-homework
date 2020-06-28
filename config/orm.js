// - Import (require) `connection.js` into `orm.js`
const connection = require("../config/connection.js");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
  //      - `selectAll()`
  SelectAll: () => {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },

  insertOne: () => {
    //query with the data inputted into the client form text box
    // run INSERT INTO burgers (burger_name, devoured === false)
    //add to rendered HTML to add to left side, with other non-devoured items
  },

  updateOne: () => {
    //run query in database. UPDATE devoured WHERE burger_name ?, change devoured from false to true
    //render HTML so burger moves to devoured side, with other eaten burgers
  },
};

//    - Export the ORM object in `module.exports`.
module.exports = orm;
