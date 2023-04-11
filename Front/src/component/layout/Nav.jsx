/**
 * Return the jsx element who contains the Nav
 * @function
 * @name Nav
 * @return {JSX.Element} Nav Component .
 */
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors";

const StyledNav = styled.nav`
width:83%
`
const NavList = styled.ul`
margin:0;
padding:0 29px 0 0 ;
width:auto;
display:flex;
justify-content:space-around;`;

const NavListPoint = styled.li``;

const NavLink = styled(Link)`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
text-decoration:none;
  color: ${colors.fontLight};
`;

function Nav() {
  return (
    <StyledNav>
      <NavList>
        <NavListPoint>
            <NavLink to="/">Accueil</NavLink>
        </NavListPoint>
        <NavListPoint>
            <NavLink to="/">Profil</NavLink>
        </NavListPoint>
        <NavListPoint>
            <NavLink to="/">Réglage</NavLink>
        </NavListPoint>
        <NavListPoint>
            <NavLink to="/">Communauté</NavLink>
        </NavListPoint>
      </NavList>
    </StyledNav>
  );
}

export default Nav;
