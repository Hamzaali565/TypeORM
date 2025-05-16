import { Request, Response } from "express";
import { AppDataSource } from "../database/dbconfig";
import { Employee } from "../ent-1ToMany--ManyToOne/Employee";
import { Photo } from "../ent-1ToMany--ManyToOne/Photo";

const insert_employee = async (req: Request, res: Response) => {
  try {
    const empManager = AppDataSource.getRepository(Employee);
    const photoManager = AppDataSource.getRepository(Photo);

    //many to one relation
    // const employee = new Employee();
    // employee.name = "hamza ali";
    // await empManager.save(employee);

    // const p1 = new Photo();
    // p1.url = "/hamza.jpg";
    // p1.employee = employee;
    // await photoManager.save(p1);

    // const p2 = new Photo();
    // p2.url = "/hamzaali.jpg";
    // p2.employee = employee;
    // await photoManager.save(p2);

    // one to many
    const p1 = new Photo();
    p1.url = "/hamza.jpg";
    await photoManager.save(p1);

    const p2 = new Photo();
    p2.url = "/hamzaali.jpg";
    await photoManager.save(p2);

    const employee = new Employee();
    employee.name = "hamza ali chishti";
    employee.photos = [p1, p2];
    await empManager.save(employee);
    res.json({ message: "Data saved", employee });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { insert_employee };
