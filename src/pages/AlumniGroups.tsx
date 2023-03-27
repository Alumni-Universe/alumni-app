import { AlumniGroupProvider } from "../contexts/AlumniGroupContext";
import { FC } from "react";
import AlumniGroupList from "../components/AlumniGroup/AlumniGroupList";

const AlumniGroups: FC = () => {
  return (
    <div className="p-2">
      <AlumniGroupProvider
        groupId={0}
        name={""}
        description={""}
        isPrivate={false}
        createdBy={0}
      >
        <AlumniGroupList />
      </AlumniGroupProvider>
    </div>
  );
};

export default AlumniGroups;
