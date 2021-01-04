import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LibExampleAService {
  private readonly logger = new Logger(LibExampleAService.name);

  sayWhat() {
    this.logger.log('hello');
  }
}
