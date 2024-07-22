import { Test, TestingModule } from '@nestjs/testing';
import { ChickensResolver } from './chickens.resolver';

describe('ChickensResolver', () => {
  let resolver: ChickensResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChickensResolver],
    }).compile();

    resolver = module.get<ChickensResolver>(ChickensResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
