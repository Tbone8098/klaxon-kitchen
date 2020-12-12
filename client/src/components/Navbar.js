import { navigate } from "@reach/router";
import React from "react";
import "./css/navbar.css";

export const Navbar = () => {
    const goHome = () => {
        navigate(`/`);
    };
    return (
        <nav>
            <div className="left">
                <h3 className="homeBtn" onClick={goHome}>
                    Klaxon
                </h3>
            </div>
            <div className="center">
                <h1>Dashboard</h1>
            </div>
            <div className="right">
                <h3>Kitchen</h3>
            </div>
        </nav>
    );
};
