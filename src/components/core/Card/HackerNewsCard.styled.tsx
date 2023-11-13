import styled from "styled-components";

import { devices } from "../../../styles/BreakPoints";
import { theme } from "../../../styles/Theme";

export const StoryContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.paddings.container};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: ${({ theme }) => theme.margins.cardBottom};
`;

export const Url = styled.p`
  color: ${({ theme }) => theme.colors.blue};
`;

export const TimeStamp = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Author = styled.span`
  margin-top: 5px;
`;

export const Score = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
