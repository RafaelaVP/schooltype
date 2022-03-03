'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.addColumn(
        'students',  
        'state',
         Sequelize.STRING

      )
      
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'state', {
     })
  }
};
