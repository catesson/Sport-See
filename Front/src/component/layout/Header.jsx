
import styled from "styled-components";
import colors from "../../utils/colors";
import Logo from "../../assets/logo-SportSee.png"

import Nav from "./Nav";


const StyledHeader = styled.header`width:100%;
height:91px;

display:flex;

align-items:center;
background-color:${colors.secondary};
`

const HeaderLogoContent = styled.div`
width:17%;
height:61px;
`
const HeaderLogo = styled.img`
width:178px;
padding:0 29px;`


function Header(){
    return(<StyledHeader>
        <HeaderLogoContent> <HeaderLogo src={Logo}/></HeaderLogoContent>
       
        <Nav />
    </StyledHeader>)
}

export default Header;