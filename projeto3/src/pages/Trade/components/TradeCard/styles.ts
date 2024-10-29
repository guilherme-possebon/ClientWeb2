import styled from "styled-components";

interface TradeCardContainerProps {
  $color: string;
}
export const TradeCardContainer = styled.div<TradeCardContainerProps>`
  display: flex;
  background-color: ${(props) => props.theme[props.$color]};
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  color: ${(props) => props.theme["gray-800"]};
  & p {
    font-size: 1rem;
    font-weight: bold;
  }

  & div {
    display: flex;
    gap: 10px;
  }
`;

export const TradeCardContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const TradeCardStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const TradeTitle = styled.h3`
  color: black;
  font-size: 20px;
  margin: 0;
  color: white;
`;

export const TradeImage = styled.img`
  width: 150px;
  height: 150px;
`;
