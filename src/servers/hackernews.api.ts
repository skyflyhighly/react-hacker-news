import axios, { AxiosResponse } from "axios";

import { Story, User } from "../types";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchTopStories = async (): Promise<number[]> => {
  try {
    const response: AxiosResponse<number[]> = await axios.get(
      `${BASE_URL}/topstories.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching top stories:", error);
    throw error;
  }
};

export const fetchStoryDetails = async (id: number): Promise<Story> => {
  try {
    const response: AxiosResponse<Story> = await axios.get(
      `${BASE_URL}/item/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the story details", error);
    throw error;
  }
};

export const fetchUserDetails = async (id: string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await axios.get(
      `${BASE_URL}/user/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the user details", error);
    throw error;
  }
};
