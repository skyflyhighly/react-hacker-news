export interface HackerNews {
  id: number;
  title: string;
  url: string;
  timestamp: number;
  score: number;
  authorId: string;
  authorKarmaScore: number;
  image?: string;
}

export interface Story {
  id: number;
  title: string;
  url: string;
  time: number;
  score: number;
  by: string;
}

export interface User {
  id: string;
  karma: number;
}
