import { PickType } from '@nestjs/mapped-types';
import { CreatePlaceDto } from './create-place.dto';

export class UpdatePlaceDto extends PickType(CreatePlaceDto, [
  'name',
  'description',
]) {
  readonly name: string;
  readonly description: string;
}
