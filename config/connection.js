const mysql = require("mysql");
let connection;

//heroku
if (process.emitWarning.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "jsh1pynaohvpvyen",
    password: "h376aoaf5gcloyit",
    database: "hgpiqynw6h17xkyh",
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
