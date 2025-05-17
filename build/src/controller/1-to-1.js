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
exports.get_user = exports.insert_user = void 0;
const Profile_1 = require("../ent-relation-1-to-1/Profile");
const dbconfig_1 = require("../database/dbconfig");
const User_1 = require("../ent-relation-1-to-1/User");
const insert_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileRepo = dbconfig_1.AppDataSource.getRepository(Profile_1.Profile);
        const userRepo = dbconfig_1.AppDataSource.getRepository(User_1.User);
        const profile = new Profile_1.Profile();
        profile.gender = "Male";
        profile.photo = "abc.png";
        yield profileRepo.save(profile);
        const user = new User_1.User();
        user.email = "hamzaali@gmail.com";
        user.phone = 99;
        user.username = "Muhammad Hamza";
        user.profile = profile;
        yield userRepo.save(user);
        res.status(201).json({ user });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.insert_user = insert_user;
const get_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //
        // const repo = AppDataSource.getRepository(User);
        // let data = await repo.find({ relations: ["profile"] });
        // data = await repo
        //   .createQueryBuilder("user")
        //   .leftJoinAndSelect("user.profile", "profile")
        //   .getMany();
        const repo = dbconfig_1.AppDataSource.getRepository(Profile_1.Profile);
        let data = yield repo
            .createQueryBuilder("profile")
            .leftJoinAndSelect("profile.user", "user")
            .select(["user.username"])
            .getRawMany();
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error !!!" });
    }
});
exports.get_user = get_user;
