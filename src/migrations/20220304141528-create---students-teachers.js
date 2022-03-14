'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentTeacher', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'students',
           key: 'id'
         }
         
    },
    teacherId: {
      type: Sequelize.INTEGER,
       allowNull: false,
       references: {
        model: 'teachers',
        key: 'id'
      }
       
  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentTeacher');
  }
};