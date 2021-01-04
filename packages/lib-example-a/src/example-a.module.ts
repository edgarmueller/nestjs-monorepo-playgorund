import { Module } from '@nestjs/common';
import { ExampleAService } from './example-a.service';

@Module({
  imports: [],
  providers: [ExampleAService],
  exports: [ExampleAService],
})
export class LibExampleAModule {}
