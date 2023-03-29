export interface AlumniGroupInfoDto {
  groupId: number;
  name: string;
}

export interface AlumniUserInfoDto {
  userId: string;
  name: string;
}

export interface EventInfoDto {
  eventId: number;
  name: string;
}

export interface PostInfoDto {
  postId: number;
  postTitle: string;
  lastUpdated: Date;
  postMessage: string | null;
  postTarget: string;
  senderId: string;
  replyParentId: number | null;
  targetUser: number | null;
  targetGroup: number | null;
  targetTopic: number | null;
  targetEvent: number | null;
  sender: AlumniUserInfoDto;
}

export interface PostReplyDto {
  postId: number;
  lastUpdated: Date;
  postMessage: string | null;
  postTarget: string;
  senderId: string;
  replyParentId: number | null;
  targetUser: number | null;
  targetGroup: number | null;
  targetTopic: number | null;
  targetEvent: number | null;
  sender: AlumniUserInfoDto;
}

export interface RsvpInfoDto {
  lastUpdated: Date;
  userId: string;
  eventId: number;
}

export interface TopicInfoDto {
  topicId: number;
  name: string;
}
