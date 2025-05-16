import { Response, Router } from "express";
import {
  create_user,
  delete_user,
  find_user,
  update_user,
} from "../controller/user";
import { find_query } from "../controller/findQuery";
import { insert_user } from "../controller/1-to-1";
import { insert_employee } from "../controller/ent-1ToMany--ManyToOne";
import { insert_question } from "../controller/manyTomany";

const router = Router();

router.post("/api/v1/user", create_user);
router.get("/api/v1/user", find_user);
router.put("/api/v1/user", update_user);
router.delete("/api/v1/user", delete_user);
router.get("/api/v1/find_query", find_query);

// 1 to 1 //
router.post("/api/v1/user_one_one", insert_user);

// 1 to Many --- Many to 1 //
router.post("/api/v1/user_one_many", insert_employee);

// Many to Many  //
router.post("/api/v1/user_many_many", insert_question);

export default router;
