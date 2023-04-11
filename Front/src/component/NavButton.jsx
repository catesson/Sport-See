
import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types' 

const StyledNavButton = styled(Link)`
display:block;
width:64px;
height:64px;
border-radius:6px;
margin:10px 0;
background:no-repeat center url(${({picture}) => picture}) ${colors.white};
`

/**
 * Retrun a JSX element who contains the Nav Button.
 * @function
 * @name NavButton
 * @param {string} picture the link of picture
 * @param {string} link the link where the user go on click
 * @return {JSX.Element} Header Component .
 */

function NavButton({picture, link}){
 return (<StyledNavButton to={link} picture={picture}></StyledNavButton>)
}

export default NavButton;


NavButton.prototype = {
    picture : PropTypes.string,
    link : PropTypes.string
}