// First, we require Sequlize module
const Sequelize = require('Sequelize');

// Next, let's create a new database connection. We use sqlite so we use local file instead of DB Servers
var sequelize = new Sequelize('learnsequelizedb', null, null, {
  dialect: 'sqlite',
  storage: 'learnsequelizedb'
});

// We've connected to the DB. Let's try a simple query!
sequelize.query("SELECT * FROM sample_table").then(function(myTableRows) {
  console.log(myTableRows);
})
