import { FC, useContext } from "react";
import { AlumniUserContext } from "../../contexts/AlumniUserContext";
import { AlumniGroupInfoDto } from "../../interfaces/Dtos";
import { IAlumniUser } from "../../interfaces/Interfaces";
import { AlumniUserContextType } from "../../types/AlumniUserContextType";
import Tab from "../shared/Tab";

const UserInfoComponent: FC = () => {
  const { alumniUsers, authenticatedUser } = useContext(
    AlumniUserContext
  ) as AlumniUserContextType;

  const createGroupList = () => {
    const user = alumniUsers.find(
      (p: IAlumniUser) => p.userId === authenticatedUser?.userId
    );

    if (user && user.alumniGroups) {
      return user.alumniGroups.map((group: AlumniGroupInfoDto) => (
        <div key={group.groupId}>
          <h4>{group.name}</h4>
          <p>{group.description}</p>
        </div>
      ));
    } else {
      return <div>No groups found</div>;
    }
  };

  const InterestTab = [
    {
      title: "People",
      content: <div>This is the content of Tab 1</div>,
    },
    {
      title: "Groups",
      content: <div>{createGroupList()}</div>,
    },

    {
      title: "Topics",
      content: <div>This is the content of Tab 2</div>,
    },

    {
      title: "People",
      content: <div>This is the content of Tab 2</div>,
    },
  ];

  const ActivityTab = [
    {
      title: "Posts",
      content: <div>This is the content of Tab 1</div>,
    },
    {
      title: "Comments",
      content: <div>This is the content of Tab 2</div>,
    },

    {
      title: "Threads",
      content: <div>This is the content of Tab 2</div>,
    },

    {
      title: "Events",
      content: <div>This is the content of Tab 2</div>,
    },
  ];

  return (
    <div className="w-4/6 bg-white shadow-md p-2">
      <div className="user-name font-bold">
        <span>Øystein Opperud</span>
      </div>
      <div className="user-role">
        <span>Developer</span>
      </div>
      <div className="user-current-status font-bold">
        <span>"Noroff"</span>
      </div>
      <div className="user-location font-light">
        <span>
          Oslo, Norway
          <a href="link" className="user-contact-info text-blue-600">
            Contact info
          </a>
        </span>
      </div>
      <div className="user-bio">
        <label className="bio-bold font-bold">Bio</label>
        <p>
          When I graduated from college, life was going to be so different. I
          was going to be able to finally do what I wanted, go where I wanted
          and make my own decisions. It didn’t turn out that way. After three
          years of unsuccessful job interviews, freelance writing and odd jobs,
          I realized that the life I dreamed of didn’t exist for me. Instead of
          a brightly lit future with endless possibilities, my path led me
          through endless dead ends and no clear destination. So what went
          wrong?
        </p>
      </div>
      <Tab heading="Interests" tabs={InterestTab} />
      <Tab heading="Activity" tabs={ActivityTab} />
    </div>
  );
};

export default UserInfoComponent;
