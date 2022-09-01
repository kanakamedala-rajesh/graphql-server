import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetTutorialArgs } from './dto/args/getTutorial.args';
import { CreateTutorialInput } from './dto/input/createTutorial.input';
import { UpdateTutorialInput } from './dto/input/updateTutorial.input';
import Tutorial from './models/Tutorial.entity';
import { TutorialsService } from './tutorials.service';

@Resolver(() => Tutorial)
export class TutorialsResolver {
  constructor(private readonly tutorialsServe: TutorialsService) {}

  @Query(() => [Tutorial], { name: 'tutorials', nullable: 'items' })
  async getTutorials(): Promise<Tutorial[]> {
    return this.tutorialsServe.getAll();
  }

  @Query(() => [Tutorial], { name: 'tutorial', nullable: true })
  async getTutorial(@Args() args: GetTutorialArgs): Promise<Tutorial> {
    return this.tutorialsServe.get(args);
  }

  @Mutation(() => Tutorial)
  async createTutorial(
    @Args('createTutorialData') createTutorialData: CreateTutorialInput,
  ): Promise<Tutorial> {
    return this.tutorialsServe.create(createTutorialData);
  }

  @Mutation(() => Tutorial)
  async updateTutorial(
    @Args('updateTutorialData') updateTutorialData: UpdateTutorialInput,
  ): Promise<Tutorial> {
    return this.tutorialsServe.update(updateTutorialData);
  }

  @Mutation(() => [Tutorial])
  async deleteUser(@Args('userId') userId: string): Promise<Tutorial[]> {
    return this.tutorialsServe.delete(userId);
  }
}
