export interface IAlumniGroup {
    groupId: number;
    name: string;
    description: string;
    isPrivate: boolean;
    createdBy: number;
    children?: React.ReactNode;
}

export interface IAlumniUser {
    userId: number;
    name: string;
    picture: string;
    status: string | null;
    bio: string | null;
    funFact: string | null;
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
    createdBy: number;
    children?: React.ReactNode;
    users: {userId:string, name: string}[]
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
    children?: React.ReactNode;
    // The following properties are omitted in the TypeScript interface
    // because they would create circular dependencies with other interfaces
    // and usually are not required when working with frontend data structures.
    // If needed, use more specific interfaces without circular dependencies.
  }