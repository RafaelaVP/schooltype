"use strict";
var Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    var Teacher = sequelize.define('teacher', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nameTeacher: {
            type: Sequelize.STRING,
            allowNull: false
        },
        discipline: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { tableName: 'teachers' });
    return Student;
};
