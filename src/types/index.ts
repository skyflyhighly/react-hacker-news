export interface HackerNews {
  id: number;
  title: string;
  url: string | undefined;
  timestamp: number;
  score: number;
  authorId: string;
  authorKarmaScore: number;
  image: string;
}

export interface Story {
  id: number;
  title: string;
  url: string | undefined;
  time: number;
  score: number;
  by: string;
}

export interface User {
  id: string;
  karma: number;
}
