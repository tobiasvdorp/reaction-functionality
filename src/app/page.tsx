import { getComments, getSomeOtherData } from "./actions";
import CommentsContainer from "./CommentsContainer";

export default async function Home() {
  const comments = await getComments();
  const someOtherData = await getSomeOtherData();
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-10">
      <section className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">
          Reaction functionality example
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center flex flex-col items-left">
          <span className="font-semibold">Some other data:</span>
          <span>Random number from API: {someOtherData}</span>
        </p>
      </section>
      <CommentsContainer initialComments={comments} />
    </main>
  );
}
