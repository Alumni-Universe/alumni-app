import { IPost } from "../interfaces/Interfaces";
import { PostContextType } from "../types/PostContextType";
import { PostService } from "../services/PostService";
import { FC, useState, useEffect, createContext } from "react";

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider: FC<IPost> = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const _posts = await PostService.getAll();
    setPosts(_posts);
  };

  const updatePost = async (alumniGroupToUpdate: IPost, id: number) => {
    await PostService.updatePost(alumniGroupToUpdate, id);
    const _posts = await PostService.getAll();
    setPosts(_posts);
  };

  const deletePost = async (id: number) => {
    await PostService.deletePost(id);
    const _posts = await PostService.getAll();
    setPosts(_posts);
  };

  /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

  const postPost = async (newPost: IPost) => {
    await PostService.postPost(newPost);
    const _posts = await PostService.getAll();
    setPosts(_posts);
  };

  return (
    <>
      <PostContext.Provider value={{ posts, updatePost, postPost, deletePost }}>
        {children}
      </PostContext.Provider>
    </>
  );
};
