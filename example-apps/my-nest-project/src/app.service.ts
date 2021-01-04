import { Injectable } from '@nestjs/common';
import { LibExampleAService } from '@eeveorg/lib-example-a';
import { LibExampleBService } from '@eeveorg/lib-example-b';

@Injectable()
export class AppService {
  constructor(
    readonly libA: LibExampleAService,
    readonly libB: LibExampleBService,
  ) {}
  getHello(): string {
    this.libA.sayWhat();
    this.libB.sayWhat();
    return 'Hello World!';
  }
}
