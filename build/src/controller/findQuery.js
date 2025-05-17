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
exports.find_query = void 0;
const dbconfig_1 = require("../database/dbconfig");
const user_1 = require("../entity/user");
const typeorm_1 = require("typeorm");
const find_query = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repoManager = dbconfig_1.AppDataSource.getRepository(user_1.User);
        // ----- select ----- //
        let data = yield repoManager.find({
            select: ["cell_number", "username"],
            //   where: { id: 21 },
        });
        //----- where with OR operator ----//
        data = yield repoManager.find({
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
        data = yield repoManager.find({
            where: {
                username: "hamza",
                id: 21,
            },
        });
        ///------ Order ----///
        data = yield repoManager.find({
            order: {
                id: "DESC",
            },
        });
        /// ----- skip , take ----- ///
        data = yield repoManager.find({
            skip: 1, /// skip first row
            take: 4, /// return next 4 rows after skipping first one
        });
        ///---- Not ----///
        data = yield repoManager.find({
            where: {
                username: (0, typeorm_1.Not)("hamza"),
            },
        });
        /// ---- <, >, = ---- ///
        data = yield repoManager.find({
            where: {
                // id: LessThan(5),
                // id: MoreThan(5),
                id: (0, typeorm_1.Equal)(18),
            },
        });
        ///---- partial search ----///
        data = yield repoManager.find({
            where: [
                {
                    username: (0, typeorm_1.Like)("%asad%"),
                },
                {
                    email: (0, typeorm_1.Like)("%ali%"),
                },
            ],
        });
        //---- between ---//
        data = yield repoManager.find({
            where: {
                id: (0, typeorm_1.Between)(1, 3),
            },
        });
        //---- In ----//
        data = yield repoManager.find({
            where: {
                id: (0, typeorm_1.In)([1, 18]),
            },
        });
        res.status(200).json({ data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});
exports.find_query = find_query;
