import React from "react";
import { Navbar } from "../Navbar";

export const Root = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};
