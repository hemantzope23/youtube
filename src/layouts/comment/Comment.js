import moment from "moment";
import React from "react";
import "./_comment.scss";

const Comment = ({ comment }) => {
  const {
    authorDisplayName,
    authorChannelUrl,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
  } = comment;

  return (
    <div className="p-2 comment d-flex">
      <img
        // src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
        src={authorProfileImageUrl}
        alt=""
        className="me-3 rounded-circle"
      />
      <div className="comment_body">
        <p className="mb-1 comment_header">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
