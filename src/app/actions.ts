"use server";

import { revalidateTag } from "next/cache";
import { Comment } from "./types";
import { commentsEndpoint, randomNumberApiUrl } from "./constants";
import { fetcher } from "./utils";

export const getComments = async (): Promise<Comment[]> => {
  const data = await fetcher(commentsEndpoint, {
    cache: "force-cache",
    next: {
      revalidate: 10,
      tags: ["comments"],
    },
  });

  return data.reverse();
};

/** This can be extended to also handle validation errors, but for this example, we'll just return the new comment.
 *
 * We have to return the new comment if the action is successful, so that the client can update the comments list. As the fetch call is revalidated, the new comment will be included in the next cached page that is served.
 */
export const addComment = async (formData: FormData): Promise<Comment> => {
  const comment = {
    name: formData.get("name"),
    body: formData.get("body"),
  };

  // Wait 3 seconds (for demo purposes)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = await fetcher(commentsEndpoint, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Revalidating this tag will revalidate the fetch call. The fetch call is used by the comments page, so the entire route will be revalidated.
  revalidateTag("comments");

  return data;
};

/** Example of another data fetching action, e.g. a call to a CMS */
export const getSomeOtherData = async () => {
  const data = await fetcher(randomNumberApiUrl, {
    // By using force-cache, we will cache this on build time, even when other fetches of the page are revalidated. If we don't use this, the fetch call will be re-executed when the page is revalidated by the `revalidateTag("comments")` call.
    cache: "force-cache",
  });

  return data[0];
};
