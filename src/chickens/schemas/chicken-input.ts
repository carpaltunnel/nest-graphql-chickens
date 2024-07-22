import { Field, ID, InputType } from '@nestjs/graphql';

@InputType({ description: 'chicken'})
export class ChickenInput {
  @Field()
  name: string;

  @Field()
  weight: number;

  @Field()
  breed: string;
}