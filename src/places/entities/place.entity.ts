import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Coords {
  @Column()
  lat: string;
  @Column()
  long: string;
}

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
//   coords: Coords;

    @Column()
    lat: string;

    @Column()
    long: string;
}
