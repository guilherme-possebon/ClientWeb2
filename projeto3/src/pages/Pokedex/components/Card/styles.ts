import styled from "styled-components";

interface CardContainerProps {
  color: string;
}
export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  height: 200px;
  background: ${(props) => props.theme[props.color]};

  & img {
    width: 8rem;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const IsShinyButton = styled.button`
  border: none;
  background-color: transparent;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
