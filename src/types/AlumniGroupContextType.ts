import { IAlumniGroup } from "../interfaces/Interfaces";

export type AlumniGroupContextType = {
  alumniGroups: IAlumniGroup[];
  updateAlumniGroup: (alumniGroupToUpdate: IAlumniGroup, id: number) => void;
  deleteAlumniGroup: (id: number) => void;
  postAlumniGroup: (newAlumniGroup: IAlumniGroup) => void;
};
