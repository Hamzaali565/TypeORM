import { Request, Response } from "express";
import { User } from "../entity/user";
import { AppDataSource } from "../database/dbconfig";

const create_user = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const { username, email, password, cell_number } = req.body;

    // method 1 middleware support
    const user = new User();

    // method 2 no middleware support
    // const user = await userRepository.insert({
    //   username,
    //   email,
    //   password,
    //   cell_number,
    // });

    console.log(user);

    res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const find_user = async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(User);

    // find all users
    const data = await userRepo.find();

    // find specific
    // const data = await userRepo.findOneBy({
    //   id: 1,
    // });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const update_user = async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(User);
    // method 1 ... this method will return updated value
    // let data = await userRepo.findOneBy({
    //   id: 1,
    // });
    // if (!data) {
    //   res.status(404).json({ message: "data not found" });
    //   return;
    // }

    // data.password = "2122aq";
    // data.username = "Hamza ali   ";

    // data = await userRepo.save(data);

    // method 2
    // const data = await userRepo.update(1, { cell_number: 12 });

    // update many with specific id /// no middleware support
    // const id: { id: number; username: string; password?: string }[] = [
    //   { id: 1, username: "mohsin", password: "hamzaali" },
    //   { id: 18, username: "kamran" },
    //   { id: 20, username: "Hamza ali", password: "11111" },
    // ];

    // const data = await Promise.all(
    //   id.map((items: { id: number; username: string; password?: string }) => {
    //     return userRepo.update(items.id, {
    //       username: items?.username,
    //       password: items?.password,
    //     });
    //   })
    // );
    // update many with specific id
    const id: { id: number; username: string; password?: string }[] = [
      { id: 1, username: "mohsin", password: "hamzaali" },
      { id: 18, username: "kamran" },
      { id: 20, username: "Hamza ali", password: "11111" },
    ];

    const data = await Promise.all(
      id.map(async (item) => {
        const user = await userRepo.findOneBy({ id: item.id });
        if (!user) throw new Error(`User with ID ${item.id} not found`);

        user.username = item.username;
        if (item.password) user.password = item.password;

        return userRepo.save(user);
      })
    );

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const delete_user = async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(User);

    // method 1
    // const data = await userRepo.delete(3);

    // method 2 return deleted value
    // let data = await userRepo.findOneBy({
    //   id: 7,
    // });
    // if (!data) {
    //   res.status(500).json({ message: "No data found" });
    //   return;
    // }
    // await userRepo.remove(data);

    // method 3 delete many

    const id: { id: number }[] = [{ id: 5 }, { id: 8 }, { id: 16 }];

    const data = await Promise.all(
      id.map((items: { id: number }) => {
        return userRepo.delete(items?.id);
      })
    );

    res.status(200).json({ message: "user deleted", data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { create_user, find_user, update_user, delete_user };
