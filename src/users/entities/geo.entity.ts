import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('GeoInput')
@ObjectType('Geo')
export class Geo {
  @Field(() => String, {
    description: 'latitude value for the position',
  })
  lat: string;

  @Field(() => String, {
    description: 'longitude value for the position',
  })
  lng: string;
}
