import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Geo } from './geo.entity';

@InputType('AddressInput')
@ObjectType('Address')
export class Address {
  @Field(() => String, {
    description: 'street name for the address',
  })
  street: string;

  @Field(() => String, {
    description: 'suite name for the address',
  })
  suite: string;

  @Field(() => String, {
    description: 'city name for the address',
  })
  city: string;

  @Field(() => String, {
    description: 'zipcode for the address',
  })
  zipcode: string;

  @Field(() => Geo, {
    description: 'Geo location for the address',
  })
  geo: Geo;
}
