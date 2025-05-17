"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserEntity = void 0;
const typeorm_1 = require("typeorm");
exports.newUserEntity = new typeorm_1.EntitySchema({
    name: "person",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        firstname: {
            type: String,
            length: 20,
        },
        lastname: {
            type: String,
            length: 20,
        },
        age: {
            type: Number,
            nullable: false,
        },
    },
    checks: [
        {
            expression: `"age" > 18`,
        },
        {
            expression: "",
        },
    ],
});
