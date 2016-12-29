const Sequelize = require('Sequelize');

var sequelize = new Sequelize('learnsequelizedb', null, null, {
  dialect: 'sqlite',
  storage: 'learnsequelizedb'
});

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

// Insert a new record
User.create({ name: "New Guy Again", age: 45 }).then(function() {
  // Display current updated records of users table
  User.findAll().then(function(res) {
    console.log();
    console.log('All Records in Users Table');
    console.log('==========================');
    res.forEach(function(record) {
      console.log(record.dataValues);
    });
  });
});
