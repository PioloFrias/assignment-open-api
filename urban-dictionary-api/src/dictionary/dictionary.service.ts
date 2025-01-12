import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DictionaryService {

    constructor(private readonly httpService: HttpService) {}

    async getWordsOfTheDay() {
        const url = 'https://urban-dictionary7.p.rapidapi.com/v0/words_of_the_day';
        const headers = {
            'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
            'x-rapidapi-key': 'c9b54cd366msh62807f069250b30p153d1ejsnb80886d5f801',
        };
    
        try {
            const response = await firstValueFrom(this.httpService.get(url, { headers }));
            return response.data;
        } catch (error) {
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
          const response = await firstValueFrom(this.httpService.get(url, { headers }));
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Failed to fetch random word');
        }
    }

    async getDefinition(term: string) {
        const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${term}`;
        const headers = {
          'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com',
          'x-rapidapi-key': 'c9b54cd366msh62807f069250b30p153d1ejsnb80886d5f801',
        };
    
        try {
          const response = await firstValueFrom(this.httpService.get(url, { headers }));
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Failed to fetch definition');
        }
    }
}
