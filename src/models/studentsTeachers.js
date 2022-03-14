const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const StudentTeacher = sequelize.define('studentteacher', {
      id: {
      type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true
      
  },
  teacherId: {
    type: Sequelize.INTEGER,
     allowNull: false,
    
},
  studentId: {
    type: Sequelize.INTEGER,
     allowNull: false,
     
}
  },{tableName:'studentteacher'})
  StudentTeacher.associate = function(models) {
    StudentTeacher.belongsTo(models.student, {foreignKey: 'studentId'})
    StudentTeacher.belongsTo(models.teacher, {foreignKey: 'teacherId'})
  };
  return StudentTeacher;
}
