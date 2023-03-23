import { IPost } from '../interfaces/Interfaces'

export type PostContextType = {
    posts: IPost[]
    updatePost: (postToUpdate: IPost, id: number) => void
    deletePost: (id: number) => void
    postPost: (newPost: IPost) => void
}