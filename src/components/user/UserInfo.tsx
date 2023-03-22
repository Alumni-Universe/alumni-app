import Tab from "../shared/Tab";

const InterestTab = [
  {
    title: "People",
    content: <div>This is the content of Tab 1</div>,
  },
  {
    title: "Groups",
    content: <div>This is the content of Tab 2</div>,
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

const UserInfoComponent = () => {
  return (
    <div className="w-4/5 pt-10 pl-10">
      <div className="user-name font-bold">
        <span>Øystein Opperud</span>
      </div>
      <div className="user-role">
        <span>Developer</span>
      </div>
      <div className="user-current-status mt-3 font-bold">
        <span>"Noroff"</span>
      </div>
      <div className="user-location mt-3 font-light">
        <span>
          Oslo, Norway
          <a href="link" className="user-contact-info ml-2 text-blue-600">
            Contact info
          </a>
        </span>
      </div>
      <div className="user-bio mt-3">
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
