import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import bcrypt from "bcrypt";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column({ unique: true })
  email!: String;

  @Column()
  password!: string;

  @Column({})
  cell_number!: number;

  @BeforeInsert()
  @BeforeUpdate()
  async formatAndHashPassword() {
    if (this.username) this.username = this.username.trim().toUpperCase();
    if (this.email) this.email = this.email.trim().toLowerCase();

    if (this.password) {
      this.password = await bcrypt.hash(this.password, 5);
    }
  }
}
