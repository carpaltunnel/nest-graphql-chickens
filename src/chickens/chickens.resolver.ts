import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { Chicken } from './schemas/chicken.js';
import CHICKENS from './mock-data/chicken-mock.js';
import { ChickenInput } from './schemas/chicken-input.js';

@Resolver(() => [Chicken])
export class ChickensResolver {

  /**
   * Query a list of chickens
   * @param {string} breed - filter by breed if provided
   * @returns {Chicken[]} - list of chickens
   */
  @Query(() => [Chicken])
  chickens(@Args('breed', { nullable: true, type: () => String}) breed: string): Chicken[] {
    // Filter by breed if requested
    if (breed) {
      return CHICKENS.filter(c => c.breed === breed);
    }

    //TODO: Handle "not found"
    return CHICKENS;
  }

  /**
   * Query a single chicken by ID
   * @param {string} id - chicken ID to search for
   * @returns 
   */
  @Query(() => Chicken)
  chicken(@Args('id', { type: () => String }) id: string): Chicken {
    //TODO: Handle "not found"
    return CHICKENS.find(c => c.id === id);
  }

  @Mutation(() => Chicken, { description: 'Register a new chicken' })
  async createChicken(@Args('chicken') chicken: ChickenInput) {
    const newChicken: Chicken = {
      id: uuid(),
      ...chicken,
    }
    CHICKENS.push(newChicken);
    return newChicken;
  }
}
