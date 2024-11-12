import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'chicken'})
export class Chicken {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  weight: number;

  @Field()
  breed: string;

  @Field()
  healthyWeight?: boolean;
}