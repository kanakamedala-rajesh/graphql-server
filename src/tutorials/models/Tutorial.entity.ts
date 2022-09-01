import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Tutorial {
  @Field()
  id?: string | null;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field({ nullable: true })
  published?: boolean;
}
