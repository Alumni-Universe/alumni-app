import axios from "axios";
import { IAlumniUser } from '../interfaces/Interfaces';

export const AlumniUserService = (function(){

    const urlToAlumniUserController = "https://noroffalumni.azurewebsites.net/api/alumniusers";

    const getAll = async () => {
        const result = await axios.get( urlToAlumniUserController );
        return result.data as IAlumniUser[];
    }

    const updateAlumniUser = async (groupToUpdate: IAlumniUser, id: number) => {
        const url = urlToAlumniUserController + id;
        const result = await axios.put(url, groupToUpdate);
        return result.data as IAlumniUser[];
    }

    const deleteAlumniUser = async (id: number) => {
        const url = urlToAlumniUserController + id;
        const result = await axios.delete(url);
        return result.data as IAlumniUser[];
    }

    const postAlumniUser = async ( newAlumniUser: IAlumniUser) => {

        const result = await axios.post( urlToAlumniUserController, newAlumniUser );
        return result.data as IAlumniUser[];
    }

    return {
        getAll,
        updateAlumniUser,
        deleteAlumniUser,
        postAlumniUser
    }

}()) 