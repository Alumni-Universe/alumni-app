import { IAlumniUser } from '../interfaces/Interfaces'

export type AlumniUserContextType = {
    alumniGroups: IAlumniUser[]
    updateAlumniUser: (alumniGroupToUpdate: IAlumniUser, id: number) => void
    deleteAlumniUser: (id: number) => void
    postAlumniUser: (newAlumniUser: IAlumniUser) => void
}