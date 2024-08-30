import { Injectable } from '@nestjs/common';
import { Chicken } from './schemas/chicken.js';
import CHICKENS from './mock-data/chicken-mock.js';
import { ChickenInput } from './schemas/chicken-input.js';

@Injectable()
export class ChickenRepository {

    getChickens(breed: string): Chicken[] {
        // Filter by breed if requested
        if (breed) {
            return CHICKENS.filter(c => c.breed === breed);
        }
    
        return CHICKENS;
    }

    getChicken(id: string): Chicken {
        return CHICKENS.find(c => c.id === id);
    }

    createChicken(newChicken: Chicken) {
        CHICKENS.push(newChicken);
        return newChicken;
    }

}