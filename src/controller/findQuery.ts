import { Request, Response } from "express";
import { AppDataSource } from "../database/dbconfig";
import { User } from "../entity/user";
import { Between, Equal, In, LessThan, Like, MoreThan, Not } from "typeorm";

const find_query = async (req: Request, res: Response) => {
  try {
    const repoManager = AppDataSource.getRepository(User);

    // ----- select ----- //
    let data = await repoManager.find({
      select: ["cell_number", "username"],
      //   where: { id: 21 },
    });

    //----- where with OR operator ----//
    data = await repoManager.find({
      where: [
        {
          username: "kamran",
        },
        {
          username: "hamza",
        },
      ],
    });

    //----- where with AND operator ----//
    data = await repoManager.find({
      where: {
        username: "hamza",
        id: 21,
      },
    });

    ///------ Order ----///
    data = await repoManager.find({
      order: {
        id: "DESC",
      },
    });

    /// ----- skip , take ----- ///
    data = await repoManager.find({
      skip: 1, /// skip first row
      take: 4, /// return next 4 rows after skipping first one
    });

    ///---- Not ----///
    data = await repoManager.find({
      where: {
        username: Not("hamza"),
      },
    });

    /// ---- <, >, = ---- ///

    data = await repoManager.find({
      where: {
        // id: LessThan(5),
        // id: MoreThan(5),
        id: Equal(18),
      },
    });

    ///---- partial search ----///
    data = await repoManager.find({
      where: [
        {
          username: Like("%asad%"),
        },
        {
          email: Like("%ali%"),
        },
      ],
    });

    //---- between ---//
    data = await repoManager.find({
      where: {
        id: Between(1, 3),
      },
    });

    //---- In ----//
    data = await repoManager.find({
      where: {
        id: In([1, 18]),
      },
    });

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { find_query };
