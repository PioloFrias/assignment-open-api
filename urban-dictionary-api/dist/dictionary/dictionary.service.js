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
exports.DictionaryService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let DictionaryService = class DictionaryService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getWordsOfTheDay() {
        const url = 'https://urban-dictionary7.p.rapidapi.com/v0/words_of_the_day';
        const headers = {
            'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
            'x-rapidapi-key': 'c9b54cd366msh62807f069250b30p153d1ejsnb80886d5f801',
        };
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers }));
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to fetch words of the day');
        }
    }
    async getRandomWord() {
        const url = 'https://urban-dictionary7.p.rapidapi.com/v0/random';
        const headers = {
            'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
            'x-rapidapi-key': 'c9b54cd366msh62807f069250b30p153d1ejsnb80886d5f801',
        };
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers }));
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to fetch random word');
        }
    }
    async getDefinition(term) {
        const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${term}`;
        const headers = {
            'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
            'x-rapidapi-key': 'c9b54cd366msh62807f069250b30p153d1ejsnb80886d5f801',
        };
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers }));
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to fetch definition');
        }
    }
};
exports.DictionaryService = DictionaryService;
exports.DictionaryService = DictionaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DictionaryService);
//# sourceMappingURL=dictionary.service.js.map