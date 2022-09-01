import { Module } from '@nestjs/common';
import { TutorialsResolver } from './tutorials.resolver';
import { TutorialsService } from './tutorials.service';

@Module({
  providers: [TutorialsResolver, TutorialsService],
})
export class TutorialsModule {}
