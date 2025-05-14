import { Column, Entity } from "typeorm";
import { Content } from "./content";

@Entity()
export class photo extends Content {
  @Column()
  photo_url!: string;
}
