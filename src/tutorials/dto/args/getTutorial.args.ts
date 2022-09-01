import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetTutorialArgs {
  @Field({ nullable: true })
  @IsNotEmpty()
  userId: string;
}
