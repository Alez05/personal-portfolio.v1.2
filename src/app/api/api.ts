// app/api/api.ts

export const fetchCVData = async () => {
  const res = await fetch("http://localhost:3001/api/v1/cv", {
    next: { revalidate: 60 }, // optional: for caching on server components
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch CV: ${res.statusText}`);
  }

  return res.json();
};
