import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Chicken } from './schemas/chicken.js';
import CHICKENS from './mock-data/chicken-mock.js';
import { ChickenRepository } from './chickens.repository.js';
import { ChickenInput } from './schemas/chicken-input.js';

@Injectable()
export class ChickensService {

    constructor(private chickenRepo: ChickenRepository) {}

    getChickens(breed: string): Chicken[] {
        return this.chickenRepo.getChickens(breed);
    }

    getChicken(id: string): Chicken {
        return this.chickenRepo.getChicken(id);
    }

    createChicken(chicken: ChickenInput) {
        const newChicken: Chicken = {
            id: uuid(),
            ...chicken,
          }
        
        return this.chickenRepo.createChicken(newChicken);
    }
}
