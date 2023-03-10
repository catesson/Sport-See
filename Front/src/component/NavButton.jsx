import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";

const StyledNavButton = styled(Link)`
display:block;
width:64px;
height:64px;
border-radius:6px;
margin:10px 0;
background:no-repeat center url(${({picture}) => picture}) ${colors.white};
`

function NavButton({picture, link}){
 return (<StyledNavButton to={link} picture={picture}></StyledNavButton>)
}

export default NavButton;