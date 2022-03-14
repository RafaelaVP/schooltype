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
exports.StudentOutput = void 0;
const type_graphql_1 = require("type-graphql");
const TeacherOutput_1 = require("../teachers/TeacherOutput");
let StudentOutput = class StudentOutput {
};
__decorate([
    (0, type_graphql_1.Field)({
        description: "nome do estudante"
    }),
    __metadata("design:type", String)
], StudentOutput.prototype, "nameStudent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, {
        description: "id estudante"
    }),
    __metadata("design:type", Number)
], StudentOutput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TeacherOutput_1.TeacherOutput], {
        description: "students and teachers"
    }),
    __metadata("design:type", Array)
], StudentOutput.prototype, "teachers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: "aniversario",
        nullable: true
    }),
    __metadata("design:type", String)
], StudentOutput.prototype, "bithday", void 0);
StudentOutput = __decorate([
    (0, type_graphql_1.ObjectType)({
        description: "lista de campos da tabela de estudante"
    })
], StudentOutput);
exports.StudentOutput = StudentOutput;
