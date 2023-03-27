import { IAlumniUser } from "../interfaces/Interfaces";

export type AlumniUserContextType = {
  alumniUsers: IAlumniUser[];
  alumniUser: IAlumniUser | undefined;
  getAlumniUser: (id: string) => void;
  updateAlumniUser: (alumniUserToUpdate: IAlumniUser, id: string) => void;
  deleteAlumniUser: (id: string) => void;
  postAlumniUser: (newAlumniUser: IAlumniUser) => void;
  getUser: (id: string) => Promise<IAlumniUser | undefined>;
};
