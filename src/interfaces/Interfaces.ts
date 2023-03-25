import { AlumniGroupInfoDto, AlumniUserInfoDto, EventInfoDto, PostInfoDto, RsvpInfoDto, TopicInfoDto } from "./Dtos";

export interface IAlumniGroup {
    groupId: number;
    name: string;
    description: string;
    isPrivate: boolean;
    createdBy: number;
    posts?: PostInfoDto[];
    events?: EventInfoDto[];
    users?: AlumniUserInfoDto[];
    children?: React.ReactNode;
}

export interface IAlumniUser {
    userId: number;
    name: string;
    picture: string;
    status: string | null;
    bio: string | null;
    funFact: string | null;
    alumniGroups?: AlumniGroupInfoDto[];
    events?: EventInfoDto[];
    postSenders?: number[];
    postTargetUserNavigations?: number[];
    rsvps?: RsvpInfoDto[];
    eventsNavigation?: number[];
    groups?: number[];
    topics?: TopicInfoDto[];
    children?: React.ReactNode;
    // The following collections are omitted in the TypeScript interface
    // because they would create circular dependencies with other interfaces
    // and usually are not required when working with frontend data structures.
    // If needed, use more specific interfaces without circular dependencies.
  }

  export interface IEvent {
    eventId: number;
    name: string;
    description: string | null;
    allowGuests: boolean;
    bannerImg: string | null;
    startTime: Date;
    endTime: Date;
    createdBy: number | string;
    posts?: PostInfoDto[];
    rsvps?: RsvpInfoDto[];
    groups?: AlumniGroupInfoDto[];
    topics?: TopicInfoDto[];
    users?: AlumniUserInfoDto[];
    children?: React.ReactNode;
    // The following collections are omitted in the TypeScript interface
    // because they would create circular dependencies with other interfaces
    // and usually are not required when working with frontend data structures.
    // If needed, use more specific interfaces without circular dependencies.
  }

  export interface IPost {
    postId: number;
    lastUpdated: Date;
    postMessage: string | null;
    postTarget: string;
    senderId: number;
    replyParentId: number | null;
    targetUser: number | null;
    targetGroup: number | null;
    targetTopic: number | null;
    targetEvent: number | null;
    sender: AlumniUserInfoDto;
    targetEventNavigation?: EventInfoDto;
    targetGroupNavigation?: AlumniGroupInfoDto;
    targetTopicNavigation?: TopicInfoDto;
    targetUserNavigation?: AlumniUserInfoDto;
    children?: React.ReactNode;
    // The following properties are omitted in the TypeScript interface
    // because they would create circular dependencies with other interfaces
    // and usually are not required when working with frontend data structures.
    // If needed, use more specific interfaces without circular dependencies.
  }

  export interface IRsvp {
    lastUpdated: Date;
    guestCount: number;
    userId: number;
    eventId: number;
    // The following properties are omitted in the TypeScript interface
    // because they would create circular dependencies with other interfaces
    // and usually are not required when working with frontend data structures.
    // If needed, use more specific interfaces without circular dependencies.
  }

  export interface ITopic {
    topicId: number;
    name: string;
    description: string;
    posts?: PostInfoDto[];
    events?: EventInfoDto[];
    users?: AlumniUserInfoDto[];
    children?: React.ReactNode;
    // The following properties are omitted in the TypeScript interface
    // because they would create circular dependencies with other interfaces
    // and usually are not required when working with frontend data structures.
    // If needed, use more specific interfaces without circular dependencies.
  }