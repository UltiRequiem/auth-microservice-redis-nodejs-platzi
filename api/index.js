import express from "express";

import { userRoute } from "./components/index.js";
import { PORT } from "../config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
