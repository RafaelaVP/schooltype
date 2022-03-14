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
exports.TeacherOutput = void 0;
const type_graphql_1 = require("type-graphql");
const StudentOuput_1 = require("../students/StudentOuput");
let TeacherOutput = class TeacherOutput {
};
__decorate([
    (0, type_graphql_1.Field)({
        description: "nome do professor"
    }),
    __metadata("design:type", String)
], TeacherOutput.prototype, "nameTeacher", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "disciplina do professor"
    }),
    __metadata("design:type", String)
], TeacherOutput.prototype, "discipline", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, {
        description: "id professor"
    }),
    __metadata("design:type", Number)
], TeacherOutput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [StudentOuput_1.StudentOutput], {
        description: "students and teachers"
    }),
    __metadata("design:type", Array)
], TeacherOutput.prototype, "students", void 0);
TeacherOutput = __decorate([
    (0, type_graphql_1.ObjectType)({
        description: "lista de campos da tabela professor"
    })
], TeacherOutput);
exports.TeacherOutput = TeacherOutput;
