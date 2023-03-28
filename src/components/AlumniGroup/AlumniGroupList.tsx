import { FC, useContext } from "react";
import { IAlumniGroup } from "../../interfaces/Interfaces";
import AlumniGroupItem from "./AlumniGroupItem";
import { AlumniGroupContext } from "../../contexts/AlumniGroupContext";
import { AlumniGroupContextType } from "../../types/AlumniGroupContextType";
import { Calendar } from "react-calendar";
//import AlumniGroupButtonCreate from "./AlumniGroupButtonCreate";
import AlumniGroupHeader from "./AlumniGroupHeader";

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
      <div className="shadow-xl justify-between">
        <AlumniGroupHeader />
      </div>
      <div className="flex">
        <div className="w-3/4 ">
          <p className="">No groups if user has not joined</p>
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