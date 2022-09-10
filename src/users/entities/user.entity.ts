import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Address } from './address.entity';
import { Company } from './company.entity';

@InputType('UserInput')
@ObjectType('User')
export class User {
  @Field(() => ID, { description: 'unique user ID' })
  id: string;

  @Field(() => String, { description: 'login username' })
  username: string;

  @Field(() => String, { description: 'user email' })
  email: string;

  @Field(() => String, { description: 'user full name', nullable: true })
  name: string;

  @Field(() => Address, { description: 'user full address', nullable: true })
  address?: Address;

  @Field(() => String, { description: 'user phone number', nullable: true })
  phone: string;

  @Field(() => String, { description: 'user webiste url', nullable: true })
  website: string;

  @Field(() => Company, { description: 'user company details', nullable: true })
  company?: Company;
}
