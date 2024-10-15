import {
  HeaderContainer,
  HeaderDiv,
  HeaderLogo,
  NavLink,
  NavMenu,
} from "./styles";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <HeaderLogo src={Logo} />
        <NavMenu>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/pokedex">Pokedex</NavLink>
          <NavLink href="/settings">Settings</NavLink>
        </NavMenu>
      </HeaderContainer>
    </HeaderDiv>
  );
}
