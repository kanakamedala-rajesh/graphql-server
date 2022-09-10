import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CompanyInput')
@ObjectType('Company')
export class Company {
  @Field(() => String, { description: 'company name' })
  name: string;

  @Field(() => String, { description: 'company catch phrase' })
  catchPhrase: string;

  @Field(() => String, { description: 'company bs' })
  bs: string;
}
