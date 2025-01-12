import { DictionaryService } from './dictionary.service';
export declare class DictionaryController {
    private readonly urbanDictionaryService;
    constructor(urbanDictionaryService: DictionaryService);
    getWordsOfTheDay(): Promise<any>;
    getRandomWord(): Promise<any>;
    getDefinition(term: string): Promise<any>;
}
