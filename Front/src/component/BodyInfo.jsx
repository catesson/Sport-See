import styled from "styled-components";
import colors from "../utils/colors";
import PictureBodyInfo from "./PictureBodyInfo";
import PropTypes from 'prop-types'  



const StyledBodyInfo = styled.div`
margin:20px auto;
  display: flex;
  padding: 32px;
  width: 194px;
  height: 60px;
  border-radius: 5px;
  background-color: ${colors.backgroundGrey};
`;


const BodyInfoData = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
  height: 60px;
  margin-left: 24px;
  & p{margin:0;}
`;

const BodyInfoValue = styled.p`
color:${colors.fontDark};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const BodyInfoUnite = styled.p`
color:${colors.fontGrey};
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;`

/**
 * return a jsx element with the body information and picture who are in props
 * @function
 * @name BodyInfo
 * @param {string} picture the link of the picture
 * @param {string} color the hexa code of the color
 * @param {string} unite the acronym of the un
 * @param {string} uniteName the complete name of the unit
 * @param {number} value the value of the unit
 * @returns {JSX.Element}
 */

function BodyInfo({ picture, color, unite, uniteName, value }) {
  return (
    <StyledBodyInfo>
      <PictureBodyInfo picture={picture} color={color}></PictureBodyInfo>
      <BodyInfoData><BodyInfoValue>
        {value}
        {unite}
      </BodyInfoValue>
      <BodyInfoUnite>{uniteName}</BodyInfoUnite>
      </BodyInfoData>
    </StyledBodyInfo>
  );
}

export default BodyInfo;

BodyInfo.propTypes = {
  picture : PropTypes.string,
  colors : PropTypes.string,
  unite : PropTypes.string,
  uniteName : PropTypes.string,
  value : PropTypes.number
}