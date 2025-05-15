import { Request, Response } from "express";
import { User } from "../entity/user";
import { getRepository } from "typeorm";
import { AppDataSource } from "../database/dbconfig";

const create_user = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.email = "Timber";
    user.username = "Timber";
    user.password = "Saw";
    user.cell_number = 25;
    await userRepository.save(user);

    res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { create_user };
