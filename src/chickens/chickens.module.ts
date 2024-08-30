import { Module } from '@nestjs/common';
import { ChickensResolver } from './chickens.resolver';
import { ChickensService } from './chickens.service';
import { ChickenRepository } from './chickens.repository';

@Module({
    providers: [ChickensResolver, ChickensService, ChickenRepository]
})
export class ChickensModule {}
