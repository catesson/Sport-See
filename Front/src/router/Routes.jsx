import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { ErrorPage } from "../pages/Error";

function MyRouter(){
    return (
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/error" element={<ErrorPage/>}/>
        </Routes>
    )
}
export default MyRouter