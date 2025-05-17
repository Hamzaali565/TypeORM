"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserEntity = void 0;
const typeorm_1 = require("typeorm");
exports.newUserEntity = new typeorm_1.EntitySchema({
    name: "new_user",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
    },
});
