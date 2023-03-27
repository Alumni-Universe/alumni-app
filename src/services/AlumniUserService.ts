import { IAlumniUser } from '../interfaces/Interfaces';
import axiosInstance from '../axiosInstance';

export const AlumniUserService = (function(){

    const urlToAlumniUserController = "https://noroffalumni.azurewebsites.net/api/AlumniUsers/";


    const getAll = async () => {
        try {
          const result = await axiosInstance.get(urlToAlumniUserController);
          return result.data as IAlumniUser[];
        } catch (error) {
          console.error('Error in getAll:', error);
          console.log('Full error object:', JSON.stringify(error, null, 2));
          throw error;
        }
      };

    const getAlumniUser = async (id: string) => {
        const url = urlToAlumniUserController + id;
        const result = await axiosInstance.get(url);
        return result.data as IAlumniUser;
    }

    const updateAlumniUser = async (userToUpdate: IAlumniUser, id: string) => {
        const url = urlToAlumniUserController + id;
        const result = await axiosInstance.put(url, userToUpdate);
        return result.data as IAlumniUser[];
    }

    const deleteAlumniUser = async (id: string) => {
        const url = urlToAlumniUserController + id;
        const result = await axiosInstance.delete(url);
        return result.data as IAlumniUser[];
    }

    const postAlumniUser = async ( newAlumniUser: IAlumniUser) => {

        const result = await axiosInstance.post( urlToAlumniUserController, newAlumniUser );
        return result.data as IAlumniUser[];
    }

    return {
        getAll,
        updateAlumniUser,
        deleteAlumniUser,
        postAlumniUser,
        getAlumniUser
    }

}()) 