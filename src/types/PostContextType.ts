import { IPost } from '../interfaces/Interfaces'

export type PostContextType = {
    alumniGroups: IPost[]
    updatePost: (alumniGroupToUpdate: IPost, id: number) => void
    deletePost: (id: number) => void
    postPost: (newPost: IPost) => void
}