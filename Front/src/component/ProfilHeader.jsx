import styled from "styled-components";
import colors from "../utils/colors";

const StyledProfilHeader = styled.div`
margin-top:68px;`;

const ProfilHeaderHello = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 24px;
  color: ${colors.fontBlack};
`;

const ProfilHeaderName = styled.span`
  color: ${colors.primary};
`;
const ProfilHeaderMessage = styled.p`
margin-top:41px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

function ProfilHeader({ name }) {
  return (
    <StyledProfilHeader>
      <ProfilHeaderHello>
        Bonjour <ProfilHeaderName>{name}</ProfilHeaderName>
      </ProfilHeaderHello>
      <ProfilHeaderMessage>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </ProfilHeaderMessage>
    </StyledProfilHeader>
  );
}

export default ProfilHeader;
