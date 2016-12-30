const Sequelize = require('Sequelize');

var sequelize = new Sequelize('learnsequelizedb', null, null, {
  dialect: 'sqlite',
  storage: 'learnsequelizedb'
});

// Model Definision
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

// Instantiate an Object
var userObj = User.build({
  name: "Burhanuddin",
  age: 19,
});

// Update the Instance
userObj.name = "Updatenuddin";
userObj.age = 20;

// Saving the Object Instance to DB
userObj.save().then(function() {
  console.log('Successfully saved!');
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

// TODO: Updates from Database (not from model instance)
