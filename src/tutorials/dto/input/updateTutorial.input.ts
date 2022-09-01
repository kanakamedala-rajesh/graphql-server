import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateTutorialInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  published?: boolean;
}
