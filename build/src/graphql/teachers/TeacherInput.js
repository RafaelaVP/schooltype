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
exports.UpdateTeacherInput = exports.CreateTeacherInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateTeacherInput = class CreateTeacherInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTeacherInput.prototype, "nameTeacher", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTeacherInput.prototype, "discipline", void 0);
CreateTeacherInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateTeacherInput);
exports.CreateTeacherInput = CreateTeacherInput;
let UpdateTeacherInput = class UpdateTeacherInput extends CreateTeacherInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], UpdateTeacherInput.prototype, "id", void 0);
UpdateTeacherInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateTeacherInput);
exports.UpdateTeacherInput = UpdateTeacherInput;
