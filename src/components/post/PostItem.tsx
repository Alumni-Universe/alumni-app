import { FC } from 'react';
import { IPost } from '../../interfaces/Interfaces';
 
const PostItem : FC<IPost> = ({ postId, lastUpdated, sender, postTarget, postMessage, senderId, replyParentId, targetEvent, targetGroup, targetTopic, targetUser, targetEventNavigation, targetGroupNavigation, targetTopicNavigation, targetUserNavigation }) => {

    return (
        <article className="card bg-light mb-3" style={{padding: "0.5rem" }}>
            <div className="card-body">
                <h4 className="card-title">Postcreator: { sender.name } userid: {sender.userId} postid: {postId}</h4>
                <p className="card-text">Post target: { postTarget }</p>
                <p className="card-text">Post message: { postMessage }</p>
                <p className="card-text">Last updated: {lastUpdated.toLocaleString()}</p>
            </div>
        </article>
    )
}

export default PostItem;