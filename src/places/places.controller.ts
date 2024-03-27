import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlaceDto } from './dto/place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findAll(): Promise<PlaceDto[]> {
    const places = await this.placesService.findAll();
    return places;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PlaceDto> {
    const place = await this.placesService.findOne(+id);
    return place;
  }

  @Post()
  async create(@Body() createPlaceDto: CreatePlaceDto): Promise<PlaceDto> {
    const place = await this.placesService.create(createPlaceDto);
    return place;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ): Promise<PlaceDto> {
    const place = await this.placesService.update(+id, updatePlaceDto);
    return {
      id: place.id,
      name: place.name,
      description: place.description,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.placesService.delete(+id);
  }
}
