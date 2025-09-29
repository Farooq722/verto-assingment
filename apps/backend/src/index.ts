import express from "express";
import cors from "cors";
import { empRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use("/api/employees", empRouter);

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});
