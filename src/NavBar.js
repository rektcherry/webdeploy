import React from "react";
import {Link} from "react-router-dom";
import "./styles/navbar.css";
import  { useEffect, useState} from "react";
import { StyledLogo, ResponsiveWrapper } from "./components";

export const NavBar = () => {
    return(
        <div>
            <nav class= "NavBar">
            <div className="menu">
                <ul>
                    <li>
                        <a href = "/">MAIN HALL</a>
                        </li>
                    <li>
                        <a href = "/Experience">SECOND FLOOR</a>
                    </li>
                </ul>
                </div>
              
            <link rel="stylesheet" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />  
            <a href="https://www.instagram.com/mertsix" target="_blank"><i class="fab fa-instagram"></i>
            </a>
            <link rel="stylesheet" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />  
            <a href="https://github.com/rektcherry/" target="_blank"><i class="fab fa-github"></i>
            </a>
            <link rel="stylesheet" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />  
            <a href="https://www.linkedin.com/in/merituuli-j%C3%A4%C3%A4skel%C3%A4inen-782206225/" target="_blank"><i class="fab fa-linkedin"></i>
            </a>
            </nav>
        </div>
    );
}

