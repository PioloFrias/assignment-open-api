import { HttpService } from '@nestjs/axios';
export declare class DictionaryService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getWordsOfTheDay(): Promise<any>;
    getRandomWord(): Promise<any>;
    getDefinition(term: string): Promise<any>;
}
