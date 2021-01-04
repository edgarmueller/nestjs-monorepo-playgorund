import { Module } from '@nestjs/common';
import { LibExampleAService } from './lib-example-a.service';

@Module({
  imports: [],
  providers: [LibExampleAService],
  exports: [LibExampleAService],
})
export class LibExampleAModule {}
