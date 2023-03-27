import axiosInstance from "../axiosInstance";
import { IPost } from "../interfaces/Interfaces";

export const PostService = (function () {
  const urlToPostController =
    "https://noroffalumni.azurewebsites.net/api/Posts/";

  const getAll = async () => {
    const result = await axiosInstance.get(urlToPostController);
    return result.data as IPost[];
  };

  const updatePost = async (postToUpdate: IPost, id: number) => {
    const url = urlToPostController + id;
    const result = await axiosInstance.put(url, postToUpdate);
    return result.data as IPost[];
  };

  const deletePost = async (id: number) => {
    const url = urlToPostController + id;
    const result = await axiosInstance.delete(url);
    return result.data as IPost[];
  };

  const postPost = async (newPost: IPost) => {
    const result = await axiosInstance.post(urlToPostController, newPost);
    return result.data as IPost[];
  };

  return {
    getAll,
    updatePost,
    deletePost,
    postPost,
  };
})();
