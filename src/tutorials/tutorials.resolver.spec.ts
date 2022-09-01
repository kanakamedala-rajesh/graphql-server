import { Test, TestingModule } from '@nestjs/testing';
import { TutorialsResolver } from './tutorials.resolver';

describe('TutorialsResolver', () => {
  let resolver: TutorialsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorialsResolver],
    }).compile();

    resolver = module.get<TutorialsResolver>(TutorialsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
