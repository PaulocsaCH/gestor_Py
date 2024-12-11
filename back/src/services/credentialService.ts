import { error } from "console"
import CredentialDto from "../dto/CredentialDto"
import ICredential from "../Interfaces/ICredential"

const credentials = [
    {
        id: 1,
        username: "paulocsa",
        password: "admi1"
    },
    {
        id: 2,
        username: "nick",
        password: "admi2"
    },
    {
        id: 3,
        username: "kuky",
        password: "admi3"
    }
]
let id: number = 4

export const createCredentialService = async (credentialData: CredentialDto) => {
    const newCredential: ICredential = {
        id,
        username: credentialData.username,
        password: credentialData.password
    }
    credentials.push(newCredential)
    id++
    
    return newCredential.id
}

export const checkCredentialService = async (credentialData: CredentialDto) => {
    const foundCredential = await credentials.find((credential)=>{
        if(credential.username === credentialData.username){
            if(credential.password === credentialData.password) return credential
        } else throw error
    })

    return foundCredential
}