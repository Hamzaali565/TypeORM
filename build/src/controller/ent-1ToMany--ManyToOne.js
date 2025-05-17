"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_employee = void 0;
const dbconfig_1 = require("../database/dbconfig");
const Employee_1 = require("../ent-1ToMany--ManyToOne/Employee");
const Photo_1 = require("../ent-1ToMany--ManyToOne/Photo");
const Details_1 = require("../ent-1ToMany--ManyToOne/Details");
const insert_employee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empManager = dbconfig_1.AppDataSource.getRepository(Employee_1.Employee);
        const photoManager = dbconfig_1.AppDataSource.getRepository(Photo_1.Photo);
        const detailManager = dbconfig_1.AppDataSource.getRepository(Details_1.Details);
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
        const p1 = new Photo_1.Photo();
        p1.url = "/hamza.jpg";
        yield photoManager.save(p1);
        const p2 = new Photo_1.Photo();
        p2.url = "/hamzaali.jpg";
        yield photoManager.save(p2);
        const employee = new Employee_1.Employee();
        employee.name = "hamza ali chishti";
        employee.photos = [p1, p2];
        // employee.details = details;
        yield empManager.save(employee);
        const details = new Details_1.Details();
        details.address = "a431";
        details.emp_name = "Asad";
        details.employee = employee;
        yield detailManager.save(details);
        res.json({ message: "Data saved", employee });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.insert_employee = insert_employee;
