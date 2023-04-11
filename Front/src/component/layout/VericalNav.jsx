/**
 * Return the jsx element who contains the Vertical Nav
 * @function
 * @name VeritcalNav
 * @return {JSX.Element} Vertical Nav Component .
 */
import styled from "styled-components";
import colors from "../../utils/colors";
import NavButton from "../NavButton";

/** all logo of vertical nav bar button */
import LogoBodyBuilding from "../../assets/bodybuilding.png";
import LogoCyclist from "../../assets/cyclist.png";
import LogoMeditation from "../../assets/meditation.png";
import LogoSwim from "../../assets/swim.png";

const StyledVerticalNav = styled.div`
  position: absolute;
  left:0px;
  width: 117px;
  min-height: 100%;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
`;
const VerticalNavButtonList = styled.div`
margin-top:40px;
`;
const VerticalNavCopyright = styled.p`
  color: ${colors.fontLight};
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin:40px 0;
`;
function VeritcalNav() {
  return (
    <StyledVerticalNav>
      <VerticalNavButtonList>
        <NavButton picture={LogoMeditation} link="/" />
        <NavButton picture={LogoSwim} link="/" />
        <NavButton picture={LogoCyclist} link="/" />
        <NavButton picture={LogoBodyBuilding} link="/" />
        </VerticalNavButtonList>
        <VerticalNavCopyright>Copiryght, SportSee 2020</VerticalNavCopyright>
      
    </StyledVerticalNav>
  );
}

export default VeritcalNav;
