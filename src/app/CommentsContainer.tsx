"use client";

import { useState } from "react";
import { Comment } from "./types";
import CommentList from "./CommentSection";
import PostCommentForm from "./components/form/PostCommentForm";

type CommentsContainerProps = {
  initialComments: Comment[];
};

/** This component is a client side component, but it does not fetch the comments itself. Instead, the comments are initially fetched on the server and then passed to the component as a prop, which results in the comments being in the first response of the server, which makes it SEO friendly. However, since we pass the comments to a `useEffect` hook, the comments can later be updated by a client-side action. */
export default function CommentsContainer({
  initialComments,
}: CommentsContainerProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleNewComment = (newComment: Comment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <div>
      <PostCommentForm onCommentPosted={handleNewComment} />
      <CommentList comments={comments} />
    </div>
  );
}
