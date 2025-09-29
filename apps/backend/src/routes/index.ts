import express from "express";
import { employees } from "./employees";

export const empRouter = express.Router();

empRouter.use("/data", employees);
