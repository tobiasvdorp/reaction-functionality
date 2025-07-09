export const fetcher = async (url: string, options: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data" + res.statusText);
  }
  return res.json();
};
