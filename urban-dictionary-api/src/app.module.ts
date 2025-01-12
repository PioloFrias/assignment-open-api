import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DictionaryService } from './dictionary/dictionary.service';
import { DictionaryController } from './dictionary/dictionary.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DictionaryController],
  providers: [AppService, DictionaryService],
})
export class AppModule {}
