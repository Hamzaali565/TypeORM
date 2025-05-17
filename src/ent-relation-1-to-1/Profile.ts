import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  photo!: string;

  @Column()
  gender!: string;

  @OneToOne(() => User, (user) => user.profile)
  user!: User;
}
