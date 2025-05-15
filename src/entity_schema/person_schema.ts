import { EntitySchema } from "typeorm";

export interface new_user {
  id: number;
  firstname: string;
  lastname: string;
  age: string;
}

export const newUserEntity = new EntitySchema<new_user>({
  name: "person",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstname: {
      type: String,
      length: 20,
    },
    lastname: {
      type: String,
      length: 20,
    },
    age: {
      type: Number,
      nullable: false,
    },
  },
  checks: [
    {
      expression: `"age" > 18`,
    },
    {
      expression: "",
    },
  ],
});
