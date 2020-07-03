import React from "react";
import {Link} from "react-router-dom";
function NotFound() {
    return(
    <>
        <h1>You get to far </h1>
        <h1>404 ERROR</h1>
        <Link to="/">Get back to home page</Link>
    </>);
};

export default NotFound;