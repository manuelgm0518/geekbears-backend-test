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
exports.OperationSchema = exports.OperationDocumentDto = exports.Operation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Operation = class Operation {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Operation.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Operation.prototype, "shortened", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Operation.prototype, "operationType", void 0);
Operation = __decorate([
    (0, mongoose_1.Schema)()
], Operation);
exports.Operation = Operation;
class OperationDocumentDto {
    constructor(url, shortened, operationType) {
        this.url = url;
        this.shortened = shortened;
        this.operationType = operationType;
    }
}
exports.OperationDocumentDto = OperationDocumentDto;
exports.OperationSchema = mongoose_1.SchemaFactory.createForClass(Operation);
//# sourceMappingURL=operation.schema.js.map