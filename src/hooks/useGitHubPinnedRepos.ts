import { useQuery } from "@tanstack/react-query";

export interface PinnedRepo {
  author: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

const fetchPinnedRepos = async (): Promise<PinnedRepo[]> => {
  const res = await fetch("https://pinned.berrysauce.dev/get/MJ-esy");
  if (!res.ok) throw new Error("Failed to fetch pinned repos");
  return res.json();
};

export const useGitHubPinnedRepos = () => {
  return useQuery({
    queryKey: ["github-pinned-repos"],
    queryFn: fetchPinnedRepos,
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};
