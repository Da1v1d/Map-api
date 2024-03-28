import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './entities/place.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<any>,
  ) {}

  async findAll(): Promise<Place[]> {
    return this.placesRepository.find();
  }

  async findOne(id: number): Promise<Place> {
    const place = await this.placesRepository.findOneBy({ id });
    if (!place) {
      throw new NotFoundException(`Place with ID ${id} is not created`);
    }
    return place;
  }

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const place = new Place();
    place.name = createPlaceDto.name;
    place.description = createPlaceDto.description;
    place.lat = createPlaceDto.lat;
    place.long = createPlaceDto.long;
    return this.placesRepository.save(place);
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
    const place = await this.findOne(id);
    place.name = updatePlaceDto.name;
    place.description = updatePlaceDto.description;
    return this.placesRepository.save(place);
  }

  async delete(id: number): Promise<void> {
    await this.placesRepository.delete(id);
  }
}
