"use strict";
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Teacher = sequelize.define('teacher', {
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
    Teacher.associate = function (models) {
        Teacher.belongsToMany(models.student, {
            through: 'studentteacher',
            foreignKey: 'teacherId',
            as: 'students',
            constraint: true
        });
    };
    return Teacher;
};
