import React from "react";
import Routing from "./routing/Routing";
import { PostProvider } from "./contexts/PostContext";
import { EventProvider } from "./contexts/EventContext";
import { TopicProvider } from "./contexts/TopicContext";
import { AlumniGroupProvider } from "./contexts/AlumniGroupContext";

class App extends React.Component {
  render() {
    return (
      <div className="container bg-slate-100">
        <PostProvider lastUpdated={new Date()} postMessage={null} postTarget={""} senderId={""} replyParentId={null} targetUser={null} targetGroup={null} targetTopic={null} targetEvent={null} sender={{userId: "", name: ""}}>
          <EventProvider eventId={0} name={""} description={null} allowGuests={false} bannerImg={null} startTime={""} endTime={""} createdBy={""}>
            <TopicProvider topicId={0} name={""} description={""}>
              <AlumniGroupProvider groupId={0} name={""} description={""} isPrivate={false} createdBy={0}>
                <Routing />
              </AlumniGroupProvider>
            </TopicProvider>
          </EventProvider>
        </PostProvider>
      </div>
    );
  }
}

export default App;
