import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  height: 200px;
  background: ${(props) => props.theme.bug};

  & img {
    width: 8rem;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
