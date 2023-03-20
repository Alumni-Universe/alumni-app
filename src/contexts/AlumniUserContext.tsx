import { IAlumniUser } from "../interfaces/Interfaces";
import { AlumniUserContextType } from "../types/AlumniUserContextType";
import { AlumniUserService } from "../services/AlumniUserService";
import { FC, useState, useEffect, createContext} from "react";

export const AlumniUserContext = createContext<AlumniUserContextType | null>(null);

export const AlumniUserProvider: FC<IAlumniUser> = ({children}) => {

    const [alumniGroups, setAlumniUsers] = useState<IAlumniUser[]>([
        
    ]);

    useEffect( () => { 
        getAlumniUsers();

        

     }, [] )

    const getAlumniUsers = async () => {
        const _alumniGroups = await AlumniUserService.getAll();
        setAlumniUsers( _alumniGroups );
    }

    const updateAlumniUser = async (alumniGroupToUpdate: IAlumniUser, id: number) => {
        await AlumniUserService.updateAlumniUser(alumniGroupToUpdate, id);
        const _alumniGroups = await AlumniUserService.getAll();
        setAlumniUsers( _alumniGroups );
    }

    const deleteAlumniUser = async (id: number) => {
        await AlumniUserService.deleteAlumniUser(id);
        const _alumniGroups = await AlumniUserService.getAll();
        setAlumniUsers( _alumniGroups );
    }

    /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

    const postAlumniUser = async (newAlumniUser: IAlumniUser) => {
        await AlumniUserService.postAlumniUser(newAlumniUser);
        const _alumniGroups = await AlumniUserService.getAll();
        setAlumniUsers( _alumniGroups );
        
    }

    return (
        <>
            <AlumniUserContext.Provider value={{alumniGroups, updateAlumniUser, postAlumniUser, deleteAlumniUser}}>
                {children}
            </AlumniUserContext.Provider>
        </>
    )
}

