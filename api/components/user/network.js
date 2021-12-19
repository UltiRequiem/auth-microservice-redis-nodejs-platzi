import { Router } from "express";

import response from "../../../network/response.js";
import { list, create } from "./controller.js";

const router = Router();

router.get("/", async (req, res) => {
  response(res, await list());
});

router.post("/", async ({ body }, res) => {
  response(res, await create(body));
});

export default router;
