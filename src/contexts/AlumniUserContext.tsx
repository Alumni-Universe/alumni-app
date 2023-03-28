import { IAlumniUser } from "../interfaces/Interfaces";
import { AlumniUserContextType } from "../types/AlumniUserContextType";
import { AlumniUserService } from "../services/AlumniUserService";
import { FC, useState, useEffect, createContext } from "react";

export const AlumniUserContext = createContext<AlumniUserContextType | null>(
  null
);

export const AlumniUserProvider: FC<IAlumniUser> = ({ children }) => {
  const [alumniUsers, setAlumniUsers] = useState<IAlumniUser[]>([]);
  const [authenticatedUser, setAuthenticatedUser] = useState<IAlumniUser>();

  useEffect(() => {
    getAlumniUsers().catch((error) => {
      console.error("Error in getAlumniUsers:", error);
    });
  }, []);

  const getAlumniUsers = async () => {
    const _alumniUsers = await AlumniUserService.getAll();
    setAlumniUsers(_alumniUsers);
  };

  const getUser = async (id: string): Promise<IAlumniUser | undefined> => {
    try {
      const _alumniUser = await AlumniUserService.getAlumniUser(id);
      return _alumniUser;
    } catch (error) {
      console.error("Error in getUser:", error);
      return undefined;
    }
  };

  const updateAlumniUser = async (
    alumniUserToUpdate: IAlumniUser,
    id: string
  ) => {
    await AlumniUserService.updateAlumniUser(alumniUserToUpdate, id);
    const _alumniUsers = await AlumniUserService.getAll();
    setAlumniUsers(_alumniUsers);
  };

  const deleteAlumniUser = async (id: string) => {
    await AlumniUserService.deleteAlumniUser(id);
    const _alumniUsers = await AlumniUserService.getAll();
    setAlumniUsers(_alumniUsers);
  };

  /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

  const postAlumniUser = async (newAlumniUser: IAlumniUser) => {
    await AlumniUserService.postAlumniUser(newAlumniUser);
    const _alumniUsers = await AlumniUserService.getAll();
    setAlumniUsers(_alumniUsers);
  };

  return (
    <>
      <AlumniUserContext.Provider
        value={{
          alumniUsers,
          getUser,
          updateAlumniUser,
          postAlumniUser,
          deleteAlumniUser,
          authenticatedUser,
          setAuthenticatedUser,
        }}
      >
        {children}
      </AlumniUserContext.Provider>
    </>
  );
};
