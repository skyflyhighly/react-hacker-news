import React from "react";

import {
  StoryContainer,
  Title,
  Url,
  TimeStamp,
  Author,
  Score,
} from "./HackerNewsCard.styled";
import { formatTimestamp } from "../../../utils";
import { HackerNews } from "../../../types";

const HackerNewsCard: React.FC<HackerNews> = (props) => {
  return (
    <>
      <StoryContainer key={props.id}>
        <Title>{props.title}</Title>
        <Url>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.url}
          </a>
        </Url>
        <TimeStamp>{formatTimestamp(props.timestamp)}</TimeStamp>
        <Score>Score: {props.score}</Score>
        <Author>
          By {props.authorId} : {props.authorKarmaScore}
        </Author>
      </StoryContainer>
    </>
  );
};

export default HackerNewsCard;
