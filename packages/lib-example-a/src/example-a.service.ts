import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ExampleAService {
  private readonly logger = new Logger(ExampleAService.name);

  sayWhat() {
    this.logger.log('hello');
  }

  sayYo() {
    this.logger.log('yoo');
  }
}
