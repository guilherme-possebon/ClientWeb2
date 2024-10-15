import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.eletric};
`;

export const HeaderContainer = styled.div`
  max-width: 74rem;
  padding: 10px 20px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 200px;
  height: auto;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme["gray-900"]};
  font-weight: bold;
  transition: 150ms all ease-in-out;

  &:hover {
    color: ${(props) => props.theme["primary-300"]};
  }
`;
