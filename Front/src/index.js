import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import styled from "styled-components";

import Header from "./component/layout/Header";
import MyRouter from "./router/Routes";
import VeritcalNav from "./component/layout/VericalNav";


const StyledBody = styled.div`
  min-width: 1024px;
`;

const StyleContent = styled.div`
  position: relative;
  width: 100%;
  min-width: 1024px;
  min-height: calc(100vh - 91px);
  display: flex;
  justify-content:center
`;
const StyleRouteContent = styled.div`
margin-left:117px;
width:78%;
min-width: 798px;
`;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <StyledBody>
        <Header />
        <StyleContent>
          <VeritcalNav />
          <StyleRouteContent>
            <MyRouter />
          </StyleRouteContent>
        </StyleContent>
      </StyledBody>
    </Router>
  </React.StrictMode>
);
