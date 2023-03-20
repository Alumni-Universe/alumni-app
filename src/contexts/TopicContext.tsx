import { ITopic } from "../interfaces/Interfaces";
import { TopicContextType } from "../types/TopicContextType";
import { TopicService } from "../services/TopicService";
import { FC, useState, useEffect, createContext} from "react";

export const TopicContext = createContext<TopicContextType | null>(null);

export const TopicProvider: FC<ITopic> = ({children}) => {

    const [alumniGroups, setTopics] = useState<ITopic[]>([
        
    ]);

    useEffect( () => { 
        getTopics();

        

     }, [] )

    const getTopics = async () => {
        const _alumniGroups = await TopicService.getAll();
        setTopics( _alumniGroups );
    }

    const updateTopic = async (alumniGroupToUpdate: ITopic, id: number) => {
        await TopicService.updateTopic(alumniGroupToUpdate, id);
        const _alumniGroups = await TopicService.getAll();
        setTopics( _alumniGroups );
    }

    const deleteTopic = async (id: number) => {
        await TopicService.deleteTopic(id);
        const _alumniGroups = await TopicService.getAll();
        setTopics( _alumniGroups );
    }

    /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

    const postTopic = async (newTopic: ITopic) => {
        await TopicService.postTopic(newTopic);
        const _alumniGroups = await TopicService.getAll();
        setTopics( _alumniGroups );
        
    }

    return (
        <>
            <TopicContext.Provider value={{alumniGroups, updateTopic, postTopic, deleteTopic}}>
                {children}
            </TopicContext.Provider>
        </>
    )
}

