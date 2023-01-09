import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/request-register"
import PageUsers from "./pages/requests-view";

function AppRoutes (){

    return(
        <Router>
            <Routes>
                <Route path="/" element= {< Page1 />} />
                <Route path="/users" element= {< PageUsers />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes