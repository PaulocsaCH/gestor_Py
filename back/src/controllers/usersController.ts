import e, { Request, Response  } from "express";
import { getAllUsersService, userByIdService, registerUserService } from "../services/usersService";
import IUser from "../Interfaces/IUser";

export const allUsers = async (req:Request, res: Response) => {
    try {
        const users: IUser[] = await getAllUsersService()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
    
}

export const userById = async (req:Request, res: Response) => {
    const {id} = req.params
    try {
        const byId:IUser|undefined = await userByIdService(Number(id))
        res.status(200).json(byId)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const registerUser = async (req:Request, res: Response) => {
    const { name, email, age, nDni, username, password } = req.body
    try {
        const newUser: IUser = await registerUserService({name, email, age, nDni, username, password})
        res.status(200).json(newUser)
    } catch (error) {
        res.status(200).json(error)
    }
}

