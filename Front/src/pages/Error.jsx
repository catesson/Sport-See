import styled from "styled-components";


const ErrorMessage = styled.h2`
font-size: 70px;
color: red;
text-align: center;
`
export function ErrorPage() {


return(
<div>

<ErrorMessage>Erreur lors de la récupération des données ! </ErrorMessage>
</div>
)}