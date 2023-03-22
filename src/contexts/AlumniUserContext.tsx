import { IAlumniUser } from "../interfaces/Interfaces";
import { AlumniUserContextType } from "../types/AlumniUserContextType";
import { AlumniUserService } from "../services/AlumniUserService";
import { FC, useState, useEffect, createContext} from "react";

export const AlumniUserContext = createContext<AlumniUserContextType | null>(null);

export const AlumniUserProvider: FC<IAlumniUser> = ({children}) => {

    const [alumniUsers, setAlumniUsers] = useState<IAlumniUser[]>([
        
    ]);

    useEffect( () => { 
        getAlumniUsers();

        

     }, [] )

    const getAlumniUsers = async () => {
        const _alumniUsers = await AlumniUserService.getAll();
        setAlumniUsers( _alumniUsers );
    }

    const updateAlumniUser = async (alumniUserToUpdate: IAlumniUser, id: number) => {
        await AlumniUserService.updateAlumniUser(alumniUserToUpdate, id);
        const _alumniUsers = await AlumniUserService.getAll();
        setAlumniUsers( _alumniUsers );
    }

    const deleteAlumniUser = async (id: number) => {
        await AlumniUserService.deleteAlumniUser(id);
        const _alumniUsers = await AlumniUserService.getAll();
        setAlumniUsers( _alumniUsers );
    }

    /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

    const postAlumniUser = async (newAlumniUser: IAlumniUser) => {
        await AlumniUserService.postAlumniUser(newAlumniUser);
        const _alumniUsers = await AlumniUserService.getAll();
        setAlumniUsers( _alumniUsers );
        
    }

    return (
        <>
            <AlumniUserContext.Provider value={{alumniUsers, updateAlumniUser, postAlumniUser, deleteAlumniUser}}>
                {children}
            </AlumniUserContext.Provider>
        </>
    )
}

