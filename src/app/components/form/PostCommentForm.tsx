"use client";
import { Comment } from "../../types";
import { addComment } from "../../actions";
import { SubmitButton } from "./SubmitButton";

type PostCommentFormProps = {
  onCommentPosted: (comment: Comment) => void;
};

export default function PostCommentForm({
  onCommentPosted,
}: PostCommentFormProps) {
  const handleSubmit = async (formData: FormData) => {
    const newComment = await addComment(formData);
    onCommentPosted(newComment);
  };

  return (
    <form
      action={handleSubmit}
      className="max-w-xl mx-auto mt-8 p-6 bg-white text-black rounded-lg shadow-md flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="body"
        placeholder="Body"
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <SubmitButton />
    </form>
  );
}
