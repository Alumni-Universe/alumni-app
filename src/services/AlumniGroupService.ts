import axios from "axios";
import { IAlumniGroup } from '../interfaces/Interfaces';

export const AlumniGroupService = (function(){

    const urlToAlumniGroupController = "https://localhost:7100/api/AlumniGroups";

    const getAll = async () => {
        const result = await axios.get( urlToAlumniGroupController );
        return result.data as IAlumniGroup[];
    }

    const updateAlumniGroup = async (groupToUpdate: IAlumniGroup, id: number) => {
        const url = urlToAlumniGroupController + id;
        const result = await axios.put(url, groupToUpdate);
        return result.data as IAlumniGroup[];
    }

    const deleteAlumniGroup = async (id: number) => {
        const url = urlToAlumniGroupController + id;
        const result = await axios.delete(url);
        return result.data as IAlumniGroup[];
    }

    const postAlumniGroup = async ( newAlumniGroup: IAlumniGroup) => {

        const result = await axios.post( urlToAlumniGroupController, newAlumniGroup );
        return result.data as IAlumniGroup[];
    }

    return {
        getAll,
        updateAlumniGroup,
        deleteAlumniGroup,
        postAlumniGroup
    }

}()) 