import axios from "axios";
import { IPost } from '../interfaces/Interfaces';

export const PostService = (function(){

    const urlToPostController = "https://noroffalumni.azurewebsites.net/api/Posts";

    const getAll = async () => {
        const result = await axios.get( urlToPostController );
        return result.data as IPost[];
    }

    const updatePost = async (postToUpdate: IPost, id: number) => {
        const url = urlToPostController + id;
        const result = await axios.put(url, postToUpdate);
        return result.data as IPost[];
    }

    const deletePost = async (id: number) => {
        const url = urlToPostController + id;
        const result = await axios.delete(url);
        return result.data as IPost[];
    }

    const postPost = async ( newPost: IPost) => {

        const result = await axios.post( urlToPostController, newPost );
        return result.data as IPost[];
    }

    return {
        getAll,
        updatePost,
        deletePost,
        postPost
    }

}()) 