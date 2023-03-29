import React, { FC } from "react";
import { PostReplyDto } from "../../interfaces/Dtos";
import CommentItem from "./CommentItem";

interface CommentListProps {
  comments: PostReplyDto[] | undefined;
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (!comments) return null;

  return (
    <div className="space-y-2 mt-2">
      {comments.map((comment) => (
        <CommentItem key={comment.postId} {...comment} />
      ))}
    </div>
  );
};

export default CommentList;