import { Request, Response } from "express";
import { AppDataSource } from "../database/dbconfig";
import { Question } from "../ent-many-to-many/question";
import { Category } from "../ent-many-to-many/category";

const insert_question = async (req: Request, res: Response) => {
  try {
    const question_repo = AppDataSource.getRepository(Question);
    const category_repo = AppDataSource.getRepository(Category);

    const c1 = new Category();
    c1.name = "table";
    await category_repo.save(c1);

    const c2 = new Category();
    c2.name = "lamp";
    await category_repo.save(c2);

    const question = new Question();
    question.title = "What is this?";
    question.categories = [c1, c2];
    await question_repo.save(question);

    res.json({ data: question });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { insert_question };
