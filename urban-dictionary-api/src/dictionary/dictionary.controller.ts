import { Controller, Get, Query } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {

    constructor(private readonly urbanDictionaryService: DictionaryService) {}

    @Get('words-of-the-day')
    async getWordsOfTheDay() {
        return this.urbanDictionaryService.getWordsOfTheDay();
    }

    @Get('random')
    async getRandomWord() {
      return this.urbanDictionaryService.getRandomWord();
    }

    @Get('define')
    async getDefinition(@Query('term') term: string) {
      return this.urbanDictionaryService.getDefinition(term);
    }
}
