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
exports.DictionaryController = void 0;
const common_1 = require("@nestjs/common");
const dictionary_service_1 = require("./dictionary.service");
let DictionaryController = class DictionaryController {
    constructor(urbanDictionaryService) {
        this.urbanDictionaryService = urbanDictionaryService;
    }
    async getWordsOfTheDay() {
        return this.urbanDictionaryService.getWordsOfTheDay();
    }
    async getRandomWord() {
        return this.urbanDictionaryService.getRandomWord();
    }
    async getDefinition(term) {
        return this.urbanDictionaryService.getDefinition(term);
    }
};
exports.DictionaryController = DictionaryController;
__decorate([
    (0, common_1.Get)('words-of-the-day'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DictionaryController.prototype, "getWordsOfTheDay", null);
__decorate([
    (0, common_1.Get)('random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DictionaryController.prototype, "getRandomWord", null);
__decorate([
    (0, common_1.Get)('define'),
    __param(0, (0, common_1.Query)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DictionaryController.prototype, "getDefinition", null);
exports.DictionaryController = DictionaryController = __decorate([
    (0, common_1.Controller)('dictionary'),
    __metadata("design:paramtypes", [dictionary_service_1.DictionaryService])
], DictionaryController);
//# sourceMappingURL=dictionary.controller.js.map