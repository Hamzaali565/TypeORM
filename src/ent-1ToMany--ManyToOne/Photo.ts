import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @ManyToOne(() => Employee, (employee) => employee.photos)
  @JoinColumn({ name: "emp_id" })
  employee!: Employee;
}

// Multiple photo Ids ya photos ek employee ki hosakti hai isi liye manyToOne use krengy
