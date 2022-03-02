const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Student = sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   nameStudent: {
      type: Sequelize.STRING,
      allowNull:false
  },
  }, {tableName: 'students'})


return Student;
}
