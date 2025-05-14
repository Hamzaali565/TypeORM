import { Column, Entity } from "typeorm";
import { Content } from "./content";

@Entity()
export class Post extends Content {
  @Column()
  post_count!: number;
}
