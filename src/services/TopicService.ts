import axios from "axios";
import { ITopic } from '../interfaces/Interfaces';

export const TopicService = (function(){

    const urlToTopicController = "https://noroffalumni.azurewebsites.net/api/Topics";

    const getAll = async () => {
        const result = await axios.get( urlToTopicController );
        return result.data as ITopic[];
    }

    const updateTopic = async (topicToUpdate: ITopic, id: number) => {
        const url = urlToTopicController + id;
        const result = await axios.put(url, topicToUpdate);
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