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
exports.Teacher = void 0;
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const teacherService_1 = require("../../services/teachers/teacherService");
const StudentOuput_1 = require("../students/StudentOuput");
const TeacherInput_1 = require("./TeacherInput");
const TeacherOutput_1 = require("./TeacherOutput");
let Teacher = class Teacher {
    async createTeacher(data, //type-graphql
    context) {
        try {
            if (context.group !== "admin") {
                throw new apollo_server_1.ApolloError("não autorizado", "UNAUTHORIZED");
            }
            await (0, teacherService_1.createTeacher)(data);
            return true;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateTeacher(data) {
        try {
            await (0, teacherService_1.updateTeacher)(data);
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteTeacher(id) {
        try {
            return await (0, teacherService_1.deleteTeacher)(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllTeachers(teacherResult) {
        try {
            return await (0, teacherService_1.getAllTeacher)(teacherResult);
        }
        catch (error) {
            console.log(error);
        }
    }
    async estudantes(teacher) {
        const teacherId = teacher.id;
        const result = (0, teacherService_1.getTeacherStudentId)(teacherId);
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Create teacher"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => TeacherInput_1.CreateTeacherInput, { description: "Dados necessários para criar um professor" })),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TeacherInput_1.CreateTeacherInput, Object]),
    __metadata("design:returntype", Promise)
], Teacher.prototype, "createTeacher", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Update student"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => TeacherInput_1.UpdateTeacherInput, { description: "Update de um professor" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TeacherInput_1.UpdateTeacherInput]),
    __metadata("design:returntype", Promise)
], Teacher.prototype, "updateTeacher", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Number, {
        description: "Delete teacher"
    }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, {
        description: "delete teacher"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Teacher.prototype, "deleteTeacher", null);
__decorate([
    (0, type_graphql_1.Query)(() => [TeacherOutput_1.TeacherOutput], {
        description: "todos professores"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Teacher.prototype, "getAllTeachers", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [StudentOuput_1.StudentOutput], {
        description: "estudantes",
        nullable: true
    }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Teacher.prototype, "estudantes", null);
Teacher = __decorate([
    (0, type_graphql_1.Resolver)(() => TeacherOutput_1.TeacherOutput)
], Teacher);
exports.Teacher = Teacher;
