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
  name: "Hapusian",
  age: 19,
});

// Delete the Object Instance. This way, the object have not made it to be saved into the DB yet.
userObj.destroy();

// TODO: Deletion from Database (not from model instance)
