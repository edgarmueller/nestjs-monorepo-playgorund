import { Module } from '@nestjs/common';
import { LibExampleAModule } from '@eeveorg/lib-example-a';
import { LibExampleBModule } from '@eeveorg/lib-example-b';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LibExampleAModule, LibExampleBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
