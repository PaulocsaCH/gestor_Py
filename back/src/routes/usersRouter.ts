import { Router } from "express";
import { getUserById, getUsers, registerUser } from "../controllers/usersController";

const usersRouter:Router = Router()

usersRouter.get("/get-all-users", getUsers)
usersRouter.get("/:id", getUserById)
usersRouter.post("/register-user", registerUser)    

export default usersRouter