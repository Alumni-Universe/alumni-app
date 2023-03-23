export interface AlumniGroupInfoDto {
    groupId: number;
    name: string;
}

export interface AlumniUserInfoDto {
    userId: number;
    name: string;
}

export interface EventInfoDto {
    eventId: number;
    name: string;
}

export interface PostInfoDto {
    postId: number;
    postTarget: string;
}

export interface RsvpInfoDto {
    lastUpdated: Date;
    userId: number;
    eventId: number;
}

export interface TopicInfoDto {
    topicId: number;
    name: string;
}









