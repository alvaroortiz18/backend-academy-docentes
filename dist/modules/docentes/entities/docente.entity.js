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
exports.Docente = void 0;
const typeorm_1 = require("typeorm");
let Docente = class Docente {
    id;
    nombres;
    apellidos;
    email;
    direccion;
    cedula;
    telefono;
    etnia_id;
    cargo_id;
    sexo_id;
    created_at;
    updated_at;
};
exports.Docente = Docente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Docente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Docente.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Docente.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40, nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Docente.prototype, "etnia_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Docente.prototype, "cargo_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Docente.prototype, "sexo_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Docente.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Docente.prototype, "updated_at", void 0);
exports.Docente = Docente = __decorate([
    (0, typeorm_1.Entity)('docente', { schema: 'docentes' })
], Docente);
//# sourceMappingURL=docente.entity.js.map