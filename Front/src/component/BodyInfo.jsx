import styled from "styled-components";
import colors from "../utils/colors";
import PictureBodyInfo from "./PictureBodyInfo";

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
