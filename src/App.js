import React, { useEffect} from "react";
import {Link} from 'react-router-dom';
import * as s from "./styles/globalStyles";
import {ResponsiveWrapper , StyledButton2, StyledImg} from "./components";
import { NavBar } from "./navbar";

function App() {  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
return (
<s.Screen>
  <s.ScrollBar>
      <s.Container
        ai={"center"}
        style={{ padding: 0, width:"100%",backgroundColor: "var(--primary)" , margin: "0px",overflowX: "hidden"}}
        image={ "/webdeploy/config/images/frontpage2.jpg"}
        >
      <s.Container>
      <StyledImg alt={"example"} src={"/webdeploy/config/images/neon.png"} style = {{width:"100%", padding: "0px", position:"center"}} />
     <s.Container
    flex={1}
    ai={"center"}
    jc={"center"}
    style={{
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 0,
  }}>
  <NavBar style={{width: "100%",height: "100%", margin:"0px", padding: 0}}/>
  </s.Container>
  </s.Container>
  <s.SpacerLarge/>
  <s.SpacerLarge/>

        <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:0 }}>
        <ResponsiveWrapper flex={1} style={{ padding: 0 }} >
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:30}}>
            <StyledImg
              alt={"example"}
              src={"/webdeploy/config/images/glitch.jpg"}
              style={{ padding: 5 }}
            />
            </s.Container>
            <s.Container flex={1} jc={"center"} ai={"center"}style={{ padding:30}}>
            <StyledImg
              alt={"example"}
              src={"/webdeploy/config/images/lanes.jpg"}
              style={{ padding: 5 }}
            />
            </s.Container>
            <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:30}}>
            <StyledImg
              alt={"example"}
              src={"/webdeploy/config/images/venytys.jpg"}
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
          width: "80%"}}
      ><s.TextTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 7,
        marginTop:"10px",
      }} 
      >MERITUULI JÄÄSKELÄINEN
      </s.TextTitle>
      <s.SpacerSmall/>
      <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
              }}
            >
            Contact:
            </s.TextDescription>
            <s.TextLink
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                width: "100%",
              }}
            >
             merituuli.jaaskelainen@gmail.com
            </s.TextLink>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
              }}
            >
            Feeling tipsy (eth):
            </s.TextDescription>
            <s.eth
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                width: "100%",
              }}
            >
            0x8ecCACb36aA933ca459b48c1039d6de532851a97
            </s.eth>
            <s.SpacerSmall/>
            <StyledImg alt={"example"} src={"/webdeploy/config/images/eth.gif"} style = {{width: "80px",  alignSelf: 'center' }} />
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
          width: "80%"}}
      ><s.TextTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 7,
        marginTop:"10px",
      }} 
      >EXPERTISES
      </s.TextTitle>
      <s.SpacerSmall/>
      <s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 0,
      }} 
      >Business
      </s.TextSubTitle>
          <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                padding: 10
              }}
            >
            LUT University, Master's degree in Strategic Finance and Analytics 8/2022
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                padding: 10
              }}
            >
            LUT University, Bachelor's degree in Business Leading 8/2019 
            </s.TextDescription>
            <s.SpacerLarge/>
            <s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
      }} 
      >Programming
      </s.TextSubTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
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
          padding: 0,
          boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          border: "2px solid var(--mint)",
          borderImage: "linear-gradient(to right, darkblue, darkorchid) 1",
          width: "80%",
          opacity: 0.85,
        }}
      >
          <s.TextTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 7,
        marginTop:"10px",
      }} 
      > Work Experience
      </s.TextTitle>
      <s.SpacerMedium/>
      <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                padding: 10,
                marginLeft: 20,
                marginRight: 20,  
              }}
            >NFT Startup 2/2022 - Current 
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                padding: 10,
                marginLeft: 20,
                marginRight: 20,  
              }}
            >Athlete 6/2017 - Current 
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--accent-text)",
                padding: 10,
                marginLeft: 20,
                marginRight: 20,  
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
            <s.SpacerLarge/>
              </s.Container>
              <s.SpacerLarge/>
                <s.SpacerLarge/>
                <s.Container
                flex={1}
                ai={"center"}
                jc={"center"}
                style={{
                width: "100%",
                backgroundColor: "black",
                opacity:0.7, 
                alignItems: "center", 
                justifyContent:"center",
              }}>
                <ResponsiveWrapper flex={1}
                style={{
                padding: 0,
                alignItems: "center", 
                justifyContent:"center",
                flexDirection: "row"}} >
        
                <link rel="stylesheet" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />  
            <a href="https://www.instagram.com/mertsix" target="_blank"><i class="fab fa-instagram"></i>
            </a>
            <link rel="stylesheet" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />  
            <a href="https://github.com/rektcherry/" target="_blank"><i class="fab fa-github"></i>
            </a>
            <link rel="stylesheet" target="_blank" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />  
            <a href="https://www.linkedin.com/in/merituuli-j%C3%A4%C3%A4skel%C3%A4inen-782206225/" target="_blank"><i class="fab fa-linkedin"></i>
            </a>
            </ResponsiveWrapper>
            </s.Container>
              </s.Container>
              </s.ScrollBar>
            </s.Screen>
  );
}
export default App;