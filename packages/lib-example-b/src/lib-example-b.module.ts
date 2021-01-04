import { Module } from '@nestjs/common';
import { LibExampleBService } from './lib-example-b.service';

@Module({
  imports: [],
  providers: [LibExampleBService],
  exports: [LibExampleBService],
})
export class LibExampleBModule {}
