"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const findQuery_1 = require("../controller/findQuery");
const _1_to_1_1 = require("../controller/1-to-1");
const ent_1ToMany__ManyToOne_1 = require("../controller/ent-1ToMany--ManyToOne");
const manyTomany_1 = require("../controller/manyTomany");
const router = (0, express_1.Router)();
router.post("/api/v1/user", user_1.create_user);
router.get("/api/v1/user", user_1.find_user);
router.put("/api/v1/user", user_1.update_user);
router.delete("/api/v1/user", user_1.delete_user);
router.get("/api/v1/find_query", findQuery_1.find_query);
// 1 to 1 //
router.post("/api/v1/user_one_one", _1_to_1_1.insert_user);
router.get("/api/v1/user_one_one", _1_to_1_1.get_user);
// 1 to Many --- Many to 1 //
router.post("/api/v1/user_one_many", ent_1ToMany__ManyToOne_1.insert_employee);
// Many to Many  //
router.post("/api/v1/user_many_many", manyTomany_1.insert_question);
exports.default = router;
