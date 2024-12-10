import RegisterUserDto from "../dto/RegisterUserDto"
import { createCredentialService } from "./credentialService"
import IUser from "../Interfaces/IUser"

const users: IUser[] = [
    {
        id:1,
        name: "Paul Gonzalo Ocsa",
        email: "paulocsa@email.com",
        age: 29,
        nDni: 39929697,
        credentialId: 1
    },
    {
        id:2,
        name: "Dafne Nicole Ocsa",
        email: "nick@email.com",
        age: 24,
        nDni: 40987233,
        credentialId: 2
    },
    {
        id:3,
        name: "Lujan Florencia Ramos",
        email: "kuky@email.com",
        age: 17,
        nDni: 43455867,
        credentialId: 3
    }
]

let id: number = 4 

export const getAllUsersService = async () => {
    return users 
}

export const getUserByIdService = async (id:number) => {
    const userById = users.find((user)=>{
        return user.id===id
    })
    return userById
}

export const registerUserService = async (registerData: RegisterUserDto) => {

    const newCredential: number = await createCredentialService({
        username: registerData.username,
        password: registerData.password
    })

    const newUser: IUser = {
        id,
        name: registerData.name,
        email: registerData.email,
        age: registerData.age,
        nDni: registerData.nDni,
        credentialId: newCredential
    }

    users.push(newUser)
    id++
    
    return newUser
}