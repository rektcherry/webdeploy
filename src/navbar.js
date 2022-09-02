import React from "react";
import "./styles/navbar.css";

export const NavBar = () => {
    return(
        <div style={{width: "100%", alignItems: "center", justifyContent:"center",display:"flex"}}>
            <nav className= "NavBar">
            <div className="menu">
                <ul>
                    <li>
                        <a href = "#/">MAIN HALL</a>
                        </li>
                    <li>
                        <a href = "#/experience">SECOND FLOOR </a>
                    </li>
        
            </ul>
            </div>
            </nav>
        </div>
    );
}

