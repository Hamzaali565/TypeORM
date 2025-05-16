import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  phone!: number;

  @OneToOne(() => Profile)
  @JoinColumn({ name: "profile_id" })
  profile!: Profile;

  @BeforeInsert()
  makeUpperCase() {
    if (this.username) this.username = this.username.toUpperCase();
    return;
  }
}
