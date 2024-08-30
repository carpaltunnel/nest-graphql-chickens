import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { Chicken } from './schemas/chicken.js';
import CHICKENS from './mock-data/chicken-mock.js';
import { ChickenInput } from './schemas/chicken-input.js';
import { ChickensService } from './chickens.service.js';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => [Chicken])
export class ChickensResolver {

  constructor(private chickenService: ChickensService){}

  /**
   * Query a list of chickens
   * @param {string} breed - filter by breed if provided
   * @returns {Chicken[]} - list of chickens
   */
  @Query(() => [Chicken])
  chickens(@Args('breed', { nullable: true, type: () => String}) breed: string): Chicken[] {

    const chickens = this.chickenService.getChickens(breed);
    
    // To return a "not found" error or no?  Discussion.

    return chickens;
  }

  /**
   * Query a single chicken by ID
   * @param {string} id - chicken ID to search for
   * @returns 
   */
  @Query(() => Chicken)
  chicken(@Args('id', { type: () => String }) id: string): Chicken {
    const chicken = this.chickenService.getChicken(id);
    
    // Return a "not found" error if not found
    if (!chicken) {
      throw new NotFoundException(`Chicken with id '${id}' was not found!`);
    }
    
    return chicken;
  }

  /**
   * Create a new chicken
   * @param chicken 
   * @returns 
   */
  @Mutation(() => Chicken, { description: 'Register a new chicken' })
  async createChicken(@Args('chicken') chicken: ChickenInput) {
    
    return this.chickenService.createChicken(chicken);
  }
}
