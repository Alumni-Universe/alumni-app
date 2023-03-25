import { ITopic } from "../interfaces/Interfaces";
import { TopicContextType } from "../types/TopicContextType";
import { TopicService } from "../services/TopicService";
import { FC, useState, useEffect, createContext } from "react";

export const TopicContext = createContext<TopicContextType | null>(null);

export const TopicProvider: FC<ITopic> = ({ children }) => {
  const [topics, setTopics] = useState<ITopic[]>([]);

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    const _topics = await TopicService.getAll();
    setTopics(_topics);
  };

  const updateTopic = async (alumniGroupToUpdate: ITopic, id: number) => {
    await TopicService.updateTopic(alumniGroupToUpdate, id);
    const _topics = await TopicService.getAll();
    setTopics(_topics);
  };

  const deleteTopic = async (id: number) => {
    await TopicService.deleteTopic(id);
    const _topics = await TopicService.getAll();
    setTopics(_topics);
  };

  /*const postArtist = (newArtist: IArtist) => {
        setArtists([newArtist, ...artists]); // I useState øsnker man ikke mutasjoner 
    }*/

  const postTopic = async (newTopic: ITopic) => {
    await TopicService.postTopic(newTopic);
    const _topics = await TopicService.getAll();
    setTopics(_topics);
  };

  return (
    <>
      <TopicContext.Provider
        value={{ topics, updateTopic, postTopic, deleteTopic }}
      >
        {children}
      </TopicContext.Provider>
    </>
  );
};
