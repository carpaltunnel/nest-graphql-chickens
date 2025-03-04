import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ChickensModule } from './chickens/chickens.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // For Lambda/OSLS deploy, uncomment these two lines (after generating schema.gql) :
      //autoSchemaFile: false,
      //typePaths: ['./schema.gql'],
      // Then comment these two lines  to disable auto generation at run time in Lambda :
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
    }),
    ChickensModule,
  ],
  providers: [],
})
export class AppModule {}
