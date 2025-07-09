import { Comment } from "./types";

type CommentListProps = {
  comments: Comment[];
};

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Comments</h1>
      <ul className="space-y-3">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            <span className="font-medium text-gray-700">{comment.name}</span>
            <span className="block text-sm text-gray-500">
              {comment.createdAt}
            </span>
            <span className="block text-sm text-gray-500">{comment.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
