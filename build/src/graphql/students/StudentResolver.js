"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const type_graphql_1 = require("type-graphql");
const LackofPermission_1 = require("../../errors/LackofPermission");
const NotFound_1 = require("../../errors/NotFound");
const studentsService_1 = require("../../services/students/studentsService");
const TeacherOutput_1 = require("../teachers/TeacherOutput");
const StudentInput_1 = require("./StudentInput");
const StudentOuput_1 = require("./StudentOuput");
let Student = class Student {
    async createStudent(data, //type-graphql
    context) {
        try {
            if (context.group !== "admin") {
                throw new LackofPermission_1.LACK_OF_PERMISSION({ LACK_OF_PERMISSION: LackofPermission_1.LACK_OF_PERMISSION });
            }
            await (0, studentsService_1.createStudent)(data);
            return true;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateStudent(data) {
        try {
            await (0, studentsService_1.updateStudent)(data);
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteStudent(id) {
        try {
            if (!id)
                throw new NotFound_1.NotFound(id);
            return await (0, studentsService_1.deleteStudent)(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllStudents(studentResult) {
        try {
            const result = await (0, studentsService_1.getAllStudent)(studentResult);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getOneStudents(id) {
        try {
            const result = await (0, studentsService_1.getOneStudent)(id);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async age(student) {
        const bithday = student.bithday;
        const age = bithday ? new Date().getFullYear() - parseInt(bithday.split("/")[2]) : null;
        return age;
    }
    async professores(student) {
        const studentId = student.id;
        const result = (0, studentsService_1.getTeachersBystudentId)(studentId);
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Create student"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => StudentInput_1.CreateStudentInput, { description: "Dados necessários para criar um estudante" })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StudentInput_1.CreateStudentInput, Object]),
    __metadata("design:returntype", Promise)
], Student.prototype, "createStudent", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Update student"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => StudentInput_1.UpdateStudentInput, { description: "Update de um estudante" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StudentInput_1.UpdateStudentInput]),
    __metadata("design:returntype", Promise)
], Student.prototype, "updateStudent", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Number, {
        description: "Delete student"
    }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, {
        description: "delete student"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Student.prototype, "deleteStudent", null);
__decorate([
    (0, type_graphql_1.Query)(() => [StudentOuput_1.StudentOutput], {
        description: "todos estudantes"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Student.prototype, "getAllStudents", null);
__decorate([
    (0, type_graphql_1.Query)(() => StudentOuput_1.StudentOutput, {
        description: "Apenas um"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Student.prototype, "getOneStudents", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => type_graphql_1.Int, {
        description: "idade do aluno",
        nullable: true
    }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Student.prototype, "age", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [TeacherOutput_1.TeacherOutput], {
        description: "professores",
        nullable: true
    }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Student.prototype, "professores", null);
Student = __decorate([
    (0, type_graphql_1.Resolver)(() => StudentOuput_1.StudentOutput)
], Student);
exports.Student = Student;
