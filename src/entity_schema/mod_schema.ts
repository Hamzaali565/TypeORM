import { EntitySchema } from "typeorm";

export interface new_user {
  id: number;
  name: string;
}

export const newUserEntity = new EntitySchema<new_user>({
  name: "new_user",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
  },
});
