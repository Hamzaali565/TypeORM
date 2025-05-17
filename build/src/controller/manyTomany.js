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
exports.insert_question = void 0;
const dbconfig_1 = require("../database/dbconfig");
const question_1 = require("../ent-many-to-many/question");
const category_1 = require("../ent-many-to-many/category");
const insert_question = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question_repo = dbconfig_1.AppDataSource.getRepository(question_1.Question);
        const category_repo = dbconfig_1.AppDataSource.getRepository(category_1.Category);
        const c1 = new category_1.Category();
        c1.name = "table";
        yield category_repo.save(c1);
        const c2 = new category_1.Category();
        c2.name = "lamp";
        yield category_repo.save(c2);
        const question = new question_1.Question();
        question.title = "What is this?";
        question.categories = [c1, c2];
        yield question_repo.save(question);
        res.json({ data: question });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.insert_question = insert_question;
