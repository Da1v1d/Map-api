import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { Place } from './entities/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlacesService],
  controllers: [PlacesController],
})
export class PlacesModule {}
