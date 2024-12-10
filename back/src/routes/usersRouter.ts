import { Router } from "express";
import { userById, allUsers, registerUser } from "../controllers/usersController";

const usersRouter:Router = Router()

usersRouter.get("/all-users", allUsers)
usersRouter.get("/:id", userById)

usersRouter.post("/register-user", registerUser)    

export default usersRouter