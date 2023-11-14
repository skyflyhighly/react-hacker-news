import styled from "styled-components";

import { device } from "../../../styles/BreakPoints";

export const StoryContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.margins.cardBottom};
  display: flex;
  color: ${({ theme }) => theme.colors.primary};

  @media ${device.sm} {
    flex-direction: column;
    box-shadow: 0 8px 0 0 ${({ theme }) => theme.colors.border};
    border-radius: 8px;
  }
`;

export const ImageContainer = styled.div`
  flex: 4;
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: 5px;
  aspect-ratio: auto 728 / 380;
  transition: scale 0.4s;
  transition-timing-function: ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;

export const TextContainer = styled.div`
  flex: 6;
  padding-left: ${({ theme }) => theme.paddings.container};

  @media ${device.sm} {
    padding: 5px 0 10px 5px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: 900;
  line-height: 31px;
  margin-bottom: 10px;
  letter-spacing: -0.15px;
`;

export const UrlContainer = styled.div`
  padding: 8px 0;
  margin-bottom: 10px;
`;

export const Url = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const MetaContainer = styled.div`
  display: flex;
  padding: 8px 0;
`;

export const TimeStamp = styled.span`
  display: flex;
  gap: 5px;
  font-size: 14px;
`;

export const Score = styled.span`
  font-size: 14px;
  margin-left: 25px;
`;

export const Author = styled.span`
  font-size: 14px;
`;

export const KarmaScore = styled.span`
  font-size: 14px;
  margin-left: 25px;
`;
