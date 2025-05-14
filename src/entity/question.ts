import { Column, Entity } from "typeorm";
import { Content } from "./content";

@Entity()
export class question extends Content {
  @Column()
  question_count!: number;
}
