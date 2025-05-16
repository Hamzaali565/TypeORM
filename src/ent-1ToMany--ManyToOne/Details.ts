import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class Details {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  emp_name!: string;

  @Column()
  address!: string;

  @OneToOne(() => Employee)
  @JoinColumn({
    name: "Emp_id",
  })
  employee!: Employee;
}
