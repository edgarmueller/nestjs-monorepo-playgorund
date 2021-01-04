import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LibExampleBService {
  private readonly logger = new Logger(LibExampleBService.name);

  sayWhat() {
    this.logger.log('wat up?!');
  }
}
