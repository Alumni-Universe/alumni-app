import { IAlumniUser } from '../interfaces/Interfaces'

export type AlumniUserContextType = {
    alumniUsers: IAlumniUser[]
    updateAlumniUser: (alumniUserToUpdate: IAlumniUser, id: string) => void
    deleteAlumniUser: (id: string) => void
    postAlumniUser: (newAlumniUser: IAlumniUser) => void
}