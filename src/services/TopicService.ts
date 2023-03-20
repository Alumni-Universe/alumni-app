import axios from "axios";
import { ITopic } from '../interfaces/Interfaces';

export const TopicService = (function(){

    const urlToTopicController = "https://localhost:7100/api/Topics";

    const getAll = async () => {
        const result = await axios.get( urlToTopicController );
        return result.data as ITopic[];
    }

    const updateTopic = async (groupToUpdate: ITopic, id: number) => {
        const url = urlToTopicController + id;
        const result = await axios.put(url, groupToUpdate);
        return result.data as ITopic[];
    }

    const deleteTopic = async (id: number) => {
        const url = urlToTopicController + id;
        const result = await axios.delete(url);
        return result.data as ITopic[];
    }

    const postTopic = async ( newTopic: ITopic) => {

        const result = await axios.post( urlToTopicController, newTopic );
        return result.data as ITopic[];
    }

    return {
        getAll,
        updateTopic,
        deleteTopic,
        postTopic
    }

}()) 