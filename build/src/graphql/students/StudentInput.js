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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentInput = exports.UpdateStudentTeacherInput = exports.CreateStudentInput = void 0;
const type_graphql_1 = require("type-graphql");
const TeacherInput_1 = require("../teachers/TeacherInput");
const StudentsEnum_1 = require("./StudentsEnum");
let CreateStudentInput = class CreateStudentInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "nameStudent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => StudentsEnum_1.StateEnum),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "state", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TeacherInput_1.CreateTeacherInput, {
        description: " teachers"
    }),
    __metadata("design:type", Array)
], CreateStudentInput.prototype, "teachers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: "aniversario"
    }),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "bithday", void 0);
CreateStudentInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateStudentInput);
exports.CreateStudentInput = CreateStudentInput;
let UpdateStudentTeacherInput = class UpdateStudentTeacherInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, { description: "Id do professor" }),
    __metadata("design:type", Number)
], UpdateStudentTeacherInput.prototype, "teacherId", void 0);
UpdateStudentTeacherInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateStudentTeacherInput);
exports.UpdateStudentTeacherInput = UpdateStudentTeacherInput;
let UpdateStudentInput = class UpdateStudentInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, { description: 'id do estudante' }),
    __metadata("design:type", Number)
], UpdateStudentInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateStudentInput.prototype, "nameStudent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => StudentsEnum_1.StateEnum),
    __metadata("design:type", String)
], UpdateStudentInput.prototype, "state", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [UpdateStudentTeacherInput], {
        description: " teachers"
    }),
    __metadata("design:type", Array)
], UpdateStudentInput.prototype, "teachers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: "aniversario"
    }),
    __metadata("design:type", String)
], UpdateStudentInput.prototype, "bithday", void 0);
UpdateStudentInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateStudentInput);
exports.UpdateStudentInput = UpdateStudentInput;
