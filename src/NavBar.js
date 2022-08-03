import React from "react";
import {Link} from "react-router-dom";
import "./styles/navbar.css";
import  { useEffect, useState} from "react";
import { StyledLogo, ResponsiveWrapper } from "./components";

export const NavBar = () => {
    return(
        <div style={{width: "100%", alignItems: "center", justifyContent:"center",display:"flex"}}>
            <nav class= "NavBar">
            <div className="menu">
                <ul>
                    <li>
                        <a href = "/">MAIN HALL</a>
                        </li>
                    <li>
                        <a href = "/experience">SECOND FLOOR</a>
                    </li>
        
            </ul>
            </div>
            </nav>
        </div>
    );
}

