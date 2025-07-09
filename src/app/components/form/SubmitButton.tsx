import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  // The useFormStatus hook should be called inside a child of the form component
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
    >
      {pending ? "Posting..." : "Post Comment"}
    </button>
  );
};
