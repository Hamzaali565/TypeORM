import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "../ent-1ToMany--ManyToOne/Photo";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Photo, (photo) => photo.employee)
  photos!: Photo[];
}

// ek employee ki id multiple photos se attach hosakti hai isi liye oneToMany relation use hoga
