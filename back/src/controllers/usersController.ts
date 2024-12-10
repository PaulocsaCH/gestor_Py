import e, { Request, Response  } from "express";
import { getAllUsersService, getUserByIdService, registerUserService } from "../services/usersService";

export const getUsers = async (req:Request, res: Response) => {
    try {
        const users = await getAllUsersService()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
    
}

export const getUserById = async (req:Request, res: Response) => {
    const {id} = req.params
    try {
        const byId = await getUserByIdService(Number(id))
        res.status(200).json(byId)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const registerUser = async (req:Request, res: Response) => {
    const { name, email, age, nDni, username, password } = req.body
    try {
        const newUser = await registerUserService({name, email, age, nDni, username, password})
        res.status(200).json(newUser)
    } catch (error) {
        res.status(200).json(error)
    }
}

