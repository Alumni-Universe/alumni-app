import axiosInstance from '../axiosInstance';
import { IAlumniGroup } from '../interfaces/Interfaces';

export const AlumniGroupService = (function(){

    const urlToAlumniGroupController = "https://noroffalumni.azurewebsites.net/api/AlumniGroups";


    const getAll = async () => {
        const result = await axiosInstance.get( urlToAlumniGroupController );
        return result.data as IAlumniGroup[];
    }

    const updateAlumniGroup = async (groupToUpdate: IAlumniGroup, id: number) => {
        const url = urlToAlumniGroupController + id;
        const result = await axiosInstance.put(url, groupToUpdate);
        return result.data as IAlumniGroup[];
    }

    const deleteAlumniGroup = async (id: number) => {
        const url = urlToAlumniGroupController + id;
        const result = await axiosInstance.delete(url);
        return result.data as IAlumniGroup[];
    }

    const postAlumniGroup = async ( newAlumniGroup: IAlumniGroup) => {
        const result = await axiosInstance.post( urlToAlumniGroupController, newAlumniGroup );
        return result.data as IAlumniGroup[];
    }

    return {
        getAll,
        updateAlumniGroup,
        deleteAlumniGroup,
        postAlumniGroup
    }

}()) 