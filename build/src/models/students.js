"use strict";
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define('student', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nameStudent: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bithday: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { tableName: 'students' });
    Student.associate = function (models) {
        Student.belongsToMany(models.teacher, {
            through: {
                model: models.studentteacher
            },
            foreignKey: 'studentId',
            as: 'teachers',
            constraint: true
        });
    };
    return Student;
};
