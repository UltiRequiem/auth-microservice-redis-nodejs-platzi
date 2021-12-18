import express from "express";

import { PORT } from "../config.js";
import user from "./components/user/network.js";

const app = express();

app.use("/api/user", user);

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
