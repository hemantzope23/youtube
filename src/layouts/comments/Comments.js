import React, { useEffect, useState } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
import { text } from "dom-helpers";

const Comments = ({ videoId, totalComments }) => {
  const comments = useSelector((state) => state.commentsList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));

    setText(" ");
  };

  // console.log("tootalComments,", totalComments);
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="my-2 comments_form d-flex w-100">
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          // src={photoURL}
          alt="avatar"
          className="me-3 rounded-circle"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
