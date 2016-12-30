const Sequelize = require('Sequelize');

var sequelize = new Sequelize('learnsequelizedb', null, null, {
  dialect: 'sqlite',
  storage: 'learnsequelizedb'
});

// User Model Definition
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
  freezeTableName: true
});

// Post Model Definition
var Post = sequelize.define('posts', {
  userid: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
});

Post.belongsTo(User, {foreignKey: 'userid'});

Post.findAll().then(function(res){
  res.forEach(function(record) {
    console.log(record);
  });
});

// TODO: This module is not yet finished!
