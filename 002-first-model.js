// First, we require Sequlize module
const Sequelize = require('Sequelize');

// Next, let's create a new database connection. We use sqlite so we use local file instead of DB Servers
var sequelize = new Sequelize('learnsequelizedb', null, null, {
  dialect: 'sqlite',
  storage: 'learnsequelizedb'
});

// We've connected to the DB. Let's define our first model :)
// More of Datatypes: http://docs.sequelizejs.com/en/v3/api/datatypes/
var User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  age: {
    type: Sequelize.INTEGER,
    field: 'age'
  },

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// Basic Model Find All
User.findAll().then(function(res) {
  // res is in array of objects. each index represents an object of a record.
  // we'll just take the dataValues for each object.
  console.log();
  console.log('All Records in Users Table');
  console.log('==========================');
  res.forEach(function(record) {
    console.log(record.dataValues);
  })
});

// Basic Model With Filter
User.findAll({ where: { age: { gt: 20 } } }).then(function(res) {
  console.log();
  console.log('Filtered Records in Users Table');
  console.log('===============================');
  res.forEach(function(record) {
    console.log(record.dataValues);
  });
});

// Basic Model Find One
User.findOne().then(function(res) {
  // res is in array of objects. each index represents an object of a record.
  // we'll just take the dataValues for each object.
  console.log();
  console.log('One Record in Users Table');
  console.log('==========================');
  console.log(res.dataValues);
});

// Basic Model Find By Id
User.findById(2).then(function(res) {
  // res is in array of objects. each index represents an object of a record.
  // we'll just take the dataValues for each object.
  console.log();
  console.log('One Record ID = 2 in Users Table');
  console.log('================================');
  console.log(res.dataValues);
});
