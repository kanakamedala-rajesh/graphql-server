import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TutorialsModule } from './tutorials/tutorials.module';
import { TutorialsResolver } from './tutorials/tutorials.resolver';
import { TutorialsService } from './tutorials/tutorials.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      debug: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'dist/schema.gql'),
    }),
    TutorialsModule,
  ],
  controllers: [],
  providers: [TutorialsService, TutorialsResolver],
})
export class AppModule {}
