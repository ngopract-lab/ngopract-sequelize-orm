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
/*
Object instance is different from Record creation. Here, we only create an object
based on a newly created record, but it is not saved to the database (yet)
*/
var userObj = User.build({
  name: "Cahyono",
  age: 17,
});

console.log(userObj.dataValues); // { id: null, name: 'Cahyono', age: 17 }
console.log(userObj.name); // "Cahyono"
console.log(userObj.age); // 17
// Here, since we instantiate an object hence not saving to DB, it does not contain id and created/updatedAt

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
