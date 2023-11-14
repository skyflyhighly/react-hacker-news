import React, { useState, useEffect } from "react";

import HackerNewsCard from "../../components/core/Card/HackerNewsCard";

import sampleImage from "../../assets/images/sample.jpg";

import {
  fetchStoryDetails,
  fetchTopStories,
  fetchUserDetails,
} from "../../servers/hackernews.api";
import { getRandomItems, storyCount } from "../../utils";
import { User, Story, HackerNews } from "../../types";

import { MainContainer, CardContainer } from "./index.styled";

const HackerNewsPage = () => {
  const [hackerNewsList, setHackerNewsList] = useState<HackerNews[]>([]);

  useEffect(() => {
    const getData = async () => {
      const topStoryIds = await fetchTopStories();
      const randomStoryIds = getRandomItems(topStoryIds, storyCount);
      const storyPromises = randomStoryIds.map((id) => fetchStoryDetails(id));
      const stories: Story[] = await Promise.all(storyPromises);
      const userPromises = stories.map((story) => fetchUserDetails(story.by));
      const users: User[] = await Promise.all(userPromises);
      setHackerNewsList(
        stories
          .map((story) => {
            return {
              id: story.id,
              title: story.title,
              url: story.url,
              timestamp: story.time,
              score: story.score,
              authorId: story.by,
              authorKarmaScore:
                users.find((user) => user.id === story.by)?.karma || 0,
              image: sampleImage,
            };
          })
          .sort((a, b) => {
            return a.score - b.score;
          })
      );
    };

    getData();
  }, []);

  return (
    <>
      <MainContainer>
        {hackerNewsList.map((story: HackerNews) => (
          <CardContainer
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HackerNewsCard
              id={story.id}
              title={story.title}
              url={story.url}
              timestamp={story.timestamp}
              score={story.score}
              authorId={story.authorId}
              authorKarmaScore={story.authorKarmaScore}
              image={story.image}
            />
          </CardContainer>
        ))}
      </MainContainer>
    </>
  );
};

export default HackerNewsPage;
