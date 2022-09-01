import { Injectable } from '@nestjs/common';
import { CreateTutorialInput } from './dto/input/createTutorial.input';
import Tutorial from './models/Tutorial.entity';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTutorialInput } from './dto/input/updateTutorial.input';
import { GetTutorialArgs } from './dto/args/getTutorial.args';

@Injectable()
export class TutorialsService {
  private tutorials: Tutorial[] = [];

  public create(createTutorialData: CreateTutorialInput): Tutorial {
    console.log('createTutorialData', createTutorialData);
    const tutorial = {
      id: uuidv4(),
      ...createTutorialData,
    };
    this.tutorials.push(tutorial);
    return tutorial;
  }

  public update(updateTutorialData: UpdateTutorialInput): Tutorial {
    console.log('updateTutorialData', updateTutorialData);
    const tutorial = this.tutorials.find(
      (tutorial) => tutorial.id === updateTutorialData.userId,
    );
    Object.assign(tutorial, updateTutorialData);
    return tutorial;
  }

  public getAll(): Tutorial[] {
    console.log('getAll');
    return this.tutorials;
  }

  public get(getTutorialArgs: GetTutorialArgs): Tutorial {
    console.log('getTutorialArgs', getTutorialArgs);
    return this.tutorials.find(
      (tutorial) => tutorial.id === getTutorialArgs.userId,
    );
  }

  public delete(id: string): Tutorial[] {
    const tutorialIndex = this.tutorials.findIndex(
      (tutorial) => tutorial.id === id,
    );
    this.tutorials.splice(tutorialIndex);
    return this.tutorials;
  }
}
