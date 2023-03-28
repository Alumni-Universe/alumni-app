import { IAlumniGroup } from "../interfaces/Interfaces";
import { AlumniGroupContextType } from "../types/AlumniGroupContextType";
import { AlumniGroupService } from "../services/AlumniGroupService";
import { FC, useState, useEffect, createContext } from "react";

export const AlumniGroupContext = createContext<AlumniGroupContextType | null>(
  null
);

export const AlumniGroupProvider: FC<IAlumniGroup> = ({ children }) => {
  const [alumniGroups, setAlumniGroups] = useState<IAlumniGroup[]>([]);

  useEffect(() => {
    getAlumniGroups();
  }, []);

  const getAlumniGroups = async () => {
    const _alumniGroups = await AlumniGroupService.getAll();
    setAlumniGroups(_alumniGroups);
  };

  const updateAlumniGroup = async (
    alumniGroupToUpdate: IAlumniGroup,
    id: number
  ) => {
    await AlumniGroupService.updateAlumniGroup(alumniGroupToUpdate, id);
    const _alumniGroups = await AlumniGroupService.getAll();
    setAlumniGroups(_alumniGroups);
  };

  const deleteAlumniGroup = async (id: number) => {
    await AlumniGroupService.deleteAlumniGroup(id);
    const _alumniGroups = await AlumniGroupService.getAll();
    setAlumniGroups(_alumniGroups);
  };

  /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

  const postAlumniGroup = async (newAlumniGroup: IAlumniGroup) => {
    await AlumniGroupService.postAlumniGroup(newAlumniGroup);
    const _alumniGroups = await AlumniGroupService.getAll();
    setAlumniGroups(_alumniGroups);
  };

  return (
    <>
      <AlumniGroupContext.Provider
        value={{
          alumniGroups,
          updateAlumniGroup,
          postAlumniGroup,
          deleteAlumniGroup,
        }}
      >
        {children}
      </AlumniGroupContext.Provider>
    </>
  );
};
