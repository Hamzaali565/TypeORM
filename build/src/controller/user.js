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
exports.delete_user = exports.update_user = exports.find_user = exports.create_user = void 0;
const user_1 = require("../entity/user");
const dbconfig_1 = require("../database/dbconfig");
const create_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = dbconfig_1.AppDataSource.getRepository(user_1.User);
        const { username, email, password, cell_number } = req.body;
        // method 1 middleware support
        const user = new user_1.User();
        // method 2 no middleware support
        // const user = await userRepository.insert({
        //   username,
        //   email,
        //   password,
        //   cell_number,
        // });
        console.log(user);
        res.status(201).json({ data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.create_user = create_user;
const find_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepo = dbconfig_1.AppDataSource.getRepository(user_1.User);
        // find all users
        const data = yield userRepo.find();
        // find specific
        // const data = await userRepo.findOneBy({
        //   id: 1,
        // });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.find_user = find_user;
const update_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepo = dbconfig_1.AppDataSource.getRepository(user_1.User);
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
        const id = [
            { id: 1, username: "mohsin", password: "hamzaali" },
            { id: 18, username: "kamran" },
            { id: 20, username: "Hamza ali", password: "11111" },
        ];
        const data = yield Promise.all(id.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield userRepo.findOneBy({ id: item.id });
            if (!user)
                throw new Error(`User with ID ${item.id} not found`);
            user.username = item.username;
            if (item.password)
                user.password = item.password;
            return userRepo.save(user);
        })));
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});
exports.update_user = update_user;
const delete_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepo = dbconfig_1.AppDataSource.getRepository(user_1.User);
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
        const id = [{ id: 5 }, { id: 8 }, { id: 16 }];
        const data = yield Promise.all(id.map((items) => {
            return userRepo.delete(items === null || items === void 0 ? void 0 : items.id);
        }));
        res.status(200).json({ message: "user deleted", data });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.delete_user = delete_user;
