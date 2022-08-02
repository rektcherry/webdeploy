import React, { useEffect, useState} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import * as s from "./styles/globalStyles";
import {ResponsiveWrapper, truncate, StyledButton, StyledButton2, Arrow, StyledImg, StyledLogo, StyledRoundButton, StyledLink} from "./components";
import { NavBar } from "./NavBar";

function App() {  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
return (
<s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 0, width: "100%", backgroundColor: "var(--primary)" }}
        image={ "config/images/frontpage2.jpg"}
        >
      <s.Container>
      <StyledImg alt={"example"} src={"/config/images/neon.png"} style = {{width:"100%",height:"20%", position:"relative"}} />
    
     <s.Container
    flex={1}
    ai={"center"}
    jc={"center"}
    style={{
    width: "100%",
    backgroundColor: "black",
  }}>
  <NavBar style={{width: "100%"}}/>
  </s.Container>
  </s.Container>
  <s.SpacerLarge/>
  <s.SpacerLarge/>
        <s.Container>
        <ResponsiveWrapper flex={1} style={{ padding: 0 }} >
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/glitch.jpg"}
              style={{ padding: 5 }}
            />
            </s.Container>
            <s.SpacerLarge/>
            <s.SpacerLarge/>
            <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/lanes.jpg"}
              style={{ padding: 5 }}
            />
            </s.Container>
            <s.SpacerLarge/>
            <s.SpacerLarge/>
            <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/venytys.jpg"}
              style={{ padding: 5 }}
            /> 
            </s.Container>
          </ResponsiveWrapper>
        </s.Container>
        <s.SpacerLarge/>
  <s.SpacerLarge/>
        <s.Container
        flex={1}
        ai={"center"}
        jc={"center"}
        style={{
          backgroundColor: "var(--secondary)",
          opacity: 0.85,
          padding: 7,
          border: "2px solid var(--mint)",
          borderImage: "linear-gradient(to right, darkblue, darkorchid) 1",
          boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          position: "relative",
          width: "60%"}}
      ><s.TextTitle
      style={{
        textAlign: "justify",
        fontSize: 40,
        color: "var(--accent-text)",
        padding: 0,
        marginTop:"10px",
      }} 
      >MERITUULI JÄÄSKELÄINEN
      </s.TextTitle>
      <s.SpacerMedium/>
      <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >
            Contact:  merituuli.jaaskelainen@gmail.com
            </s.TextDescription>
            
            <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 18,
                color: "var(--accent-text)",
                padding: 0
              }}
            > 
            Feeling tipsy (eth):  0x8ecCACb36aA933ca459b48c1039d6de532851a97
            </s.TextDescription>
            <s.SpacerSmall/>
            <StyledImg alt={"example"} src={"/config/images/eth.gif"} style = {{width:"8%",height:"8%", position:"relative"}} />
            <s.SpacerLarge/>
      </s.Container>
  <s.SpacerLarge/>
        <s.Container
        flex={1}
        ai={"center"}
        jc={"center"}
        style={{
          backgroundColor: "var(--secondary)",
          opacity: 0.85,
          padding: 7,
          border: "2px solid var(--mint)",
          borderImage: "linear-gradient(to right, darkblue, darkorchid) 1",
          boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          position: "relative",
          width: "60%"}}
      ><s.TextTitle
      style={{
        textAlign: "justify",
        fontSize: 40,
        color: "var(--accent-text)",
        padding: 0,
        marginTop:"10px",
      }} 
      >EXPERTISES
      </s.TextTitle>
      <s.SpacerMedium/>
      <s.TextTitle
      style={{
        textAlign: "justify",
        fontSize: 30,
        color: "var(--accent-text)",
        padding: 0,
      }} 
      >Business
      </s.TextTitle>
          <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >
            LUT University, Master's degree in Strategic Finance and Analytics 8/2022
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >
            LUT University, Bachelor's degree in Business Leading 8/2019 
            </s.TextDescription>
            <s.SpacerLarge/>
            <s.TextTitle
      style={{
        textAlign: "justify",
        fontSize: 30,
        color: "var(--accent-text)",
        padding: 0,
      }} 
      >Programming
      </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >
             Fluent in: JavaScript, Pyhton, SQL, Solidity, HTML, CSS
            </s.TextDescription>
          <s.SpacerLarge/>
        </s.Container>
        <s.SpacerLarge/>
        <s.Container
        flex={2}
        ai={"center"}
        jc={"center"}
        style={{
          backgroundColor: "var(--primary)",
          padding: 7,
          boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          border: "2px solid var(--mint)",
          borderImage: "linear-gradient(to right, darkblue, darkorchid) 1",
          width: "60%",
          opacity: 0.85,
        }}
      >
          <s.TextTitle
      style={{
        textAlign: "justify",
        fontSize: 40,
        color: "var(--accent-text)",
      }} 
      > Work Experience
      </s.TextTitle>
      <s.SpacerMedium/>
      <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >NFT Startup 2/2022 - Current 
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >Athlete 6/2017 - Current 
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                fontSize: 20,
                color: "var(--accent-text)",
                padding: 10
              }}
            >Seepia Games Data Analytics Trainee 4/2022 - 5/2022
            </s.TextDescription>
            <s.SpacerLarge/>
            <Link to="/experience">
            <StyledButton2
            onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
              >ENTER SECOND FLOOR FOR EXTENDED DETAILS</StyledButton2>
            </Link>
            <Arrow
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          cursor: 'pointer',}}
        >^</Arrow>
            <s.SpacerLarge/>
              </s.Container>
              <s.SpacerLarge/>
                <s.SpacerLarge/>
              </s.Container>
            </s.Screen>
  );
}
export default App;