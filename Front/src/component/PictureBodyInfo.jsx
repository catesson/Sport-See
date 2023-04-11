import styled from "styled-components";
import PropTypes from 'prop-types' 
const StyledPictureBodyInfo = styled.div`
width:60px;
height:60px;
border-radius:6px;
background: no-repeat center  url(${({picture}) => picture}) ${({color}) => color} ;
`
function PictureBodyInfo({picture, color}){
    return(<StyledPictureBodyInfo picture={picture} color={color}></StyledPictureBodyInfo>)
}
export default PictureBodyInfo

PictureBodyInfo.propTypes = {
    picture : PropTypes.string,
  color : PropTypes.string,
}