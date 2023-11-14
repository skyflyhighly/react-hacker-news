import React from "react";

import { formatTimestamp } from "../../../utils";
import { HackerNews } from "../../../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import {
  StoryContainer,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  UrlContainer,
  Url,
  MetaContainer,
  Score,
  TimeStamp,
  Author,
  KarmaScore,
} from "./HackerNewsCard.styled";

const HackerNewsCard: React.FC<HackerNews> = (props) => {
  return (
    <>
      <StoryContainer key={props.id}>
        <ImageContainer>
          <Image src={props.image} />
        </ImageContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          {props.url !== undefined && (
            <UrlContainer>
              <Url href={props.url} target="_blank" rel="noopener noreferrer">
                {props.url}
              </Url>
            </UrlContainer>
          )}
          <MetaContainer>
            <TimeStamp>
              <FontAwesomeIcon icon={faCalendar} size="1x" />
              {formatTimestamp(props.timestamp)}
            </TimeStamp>
            <Score>Story Score: {props.score}</Score>
          </MetaContainer>
          <MetaContainer>
            <Author>Author: {props.authorId}</Author>
            <KarmaScore>Author Score: {props.authorKarmaScore}</KarmaScore>
          </MetaContainer>
        </TextContainer>
      </StoryContainer>
    </>
  );
};

export default HackerNewsCard;
