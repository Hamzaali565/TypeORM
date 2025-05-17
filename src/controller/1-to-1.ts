import { Request, Response } from "express";
import { Profile } from "../ent-relation-1-to-1/Profile";
import { AppDataSource } from "../database/dbconfig";
import { User } from "../ent-relation-1-to-1/User";

const insert_user = async (req: Request, res: Response) => {
  try {
    const profileRepo = AppDataSource.getRepository(Profile);
    const userRepo = AppDataSource.getRepository(User);

    const profile = new Profile();
    profile.gender = "Male";
    profile.photo = "abc.png";
    await profileRepo.save(profile);

    const user = new User();
    user.email = "hamzaali@gmail.com";
    user.phone = 99;
    user.username = "Muhammad Hamza";
    user.profile = profile;
    await userRepo.save(user);

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const get_user = async (req: Request, res: Response) => {
  try {
    //
    // const repo = AppDataSource.getRepository(User);
    // let data = await repo.find({ relations: ["profile"] });

    const repo = AppDataSource.getRepository(Profile);
    let data = await repo
      .createQueryBuilder("profile")
      .leftJoinAndSelect("profile.user", "user")
      .getMany();

    res.json({ data });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error !!!" });
  }
};

export { insert_user, get_user };
