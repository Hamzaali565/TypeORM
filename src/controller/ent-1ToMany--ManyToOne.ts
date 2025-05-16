import { Request, Response } from "express";
import { AppDataSource } from "../database/dbconfig";
import { Employee } from "../ent-1ToMany--ManyToOne/Employee";
import { Photo } from "../ent-1ToMany--ManyToOne/Photo";
import { Details } from "../ent-1ToMany--ManyToOne/Details";

const insert_employee = async (req: Request, res: Response) => {
  try {
    const empManager = AppDataSource.getRepository(Employee);
    const photoManager = AppDataSource.getRepository(Photo);
    const detailManager = AppDataSource.getRepository(Details);

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
    // employee.details = details;
    await empManager.save(employee);

    const details = new Details();
    details.address = "a431";
    details.emp_name = "Asad";
    details.employee = employee;
    await detailManager.save(details);

    res.json({ message: "Data saved", employee });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { insert_employee };
