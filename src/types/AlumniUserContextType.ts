import { IAlumniUser } from '../interfaces/Interfaces'

export type AlumniUserContextType = {
    alumniUsers: IAlumniUser[]
    updateAlumniUser: (alumniUserToUpdate: IAlumniUser, id: number) => void
    deleteAlumniUser: (id: number) => void
    postAlumniUser: (newAlumniUser: IAlumniUser) => void
}