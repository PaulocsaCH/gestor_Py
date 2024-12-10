import CredentialDto from "../dto/CredentialDto"
import ICredential from "../Interfaces/ICredential"

const credentials = []
let id: number = 1

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

export const checkCredentialService = async () => {

}