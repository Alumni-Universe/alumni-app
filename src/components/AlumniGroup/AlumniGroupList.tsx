import { FC, useContext } from "react";
import { IAlumniGroup } from "../../interfaces/Interfaces";
import AlumniGroupItem from "./AlumniGroupItem";
import { AlumniGroupContext } from "../../contexts/AlumniGroupContext";
import { AlumniGroupContextType } from "../../types/AlumniGroupContextType";
import { Calendar } from "react-calendar";
import AlumniGroupHeader from "./AlumniGroupHeader";
import AlumniGroupDetails from "./AlumniGroupDetails";
import AlumniGroupDetailsHeader from "./AlumniGroupDetailsHeader";

const AlumniGroupList: FC = () => {
  const { alumniGroups } = useContext(
    AlumniGroupContext
  ) as AlumniGroupContextType;

  const createGroupList = () => {
    return alumniGroups.map((group: IAlumniGroup, key: number) => {
      return (
        <div key={key}> 
          <AlumniGroupItem
            groupId={group.groupId}
            name={group.name}
            description={group.description}
            isPrivate={group.isPrivate}
            createdBy={group.createdBy}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex-col">
      <div className="shadow-sm justify-between">
        <AlumniGroupHeader />
      </div>
      <div className="flex">
        <div className="w-3/4 py-2">
          <AlumniGroupDetailsHeader/>
          <AlumniGroupDetails groupId={0} name={""} description={""} isPrivate={false} createdBy={0}/>
        </div>
        <div className="w-1/4">
          <div className="flex-row py-2">
            <Calendar />
            <h4 className="text-center py-2 font-bold">PUBLIC GROUPS</h4>
            {createGroupList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniGroupList;