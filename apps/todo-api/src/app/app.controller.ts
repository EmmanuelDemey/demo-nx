import { Controller, Get } from '@nestjs/common';
import {Todo} from '@emmanueldemey/data'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Todo[] {
    return [
      {done: false, label: 'do the talk'}
    ]
  }
}
