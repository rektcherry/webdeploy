import React, { useEffect} from "react";
import * as s from "./styles/globalStyles";
import {ResponsiveWrapper, StyledImg} from "./components";
import { NavBar } from "./navbar";

function Experience() {  
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
return (
<s.Screen>
<s.ScrollBar>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 0, backgroundColor: "var(--primary)" , overflowX:"hidden" }}
        image={ "./config/images/frontpage2.jpg"}
        >
      <s.Container>
      <StyledImg alt={"example"} src={"./config/images/neon.png"} style = {{width:"100%",height:"20%", position:"relative"}} />
    
     <s.Container
    flex={1}
    ai={"center"}
    jc={"center"}
    style={{
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  }}>
  <NavBar style={{width: "100%"}}/>
  </s.Container>
  </s.Container>
  <s.SpacerLarge/>
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
      ><s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 0,
        marginTop:"10px",
      }} 
      >WHAT IS THIS?
      </s.TextSubTitle>
      <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >
            The reason I made this website is to show off my amazing web developer skills (just joking, although it ended up looking pretty good). 
            I will soon graduate from university and want to use this website as a tool to get hired in some
            cool company. 
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >
            The environment I am looking for would be young and inspiring. A place where 
            it is appreciated to be analytical and creative. 
            </s.TextDescription>
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
      ><s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 0,
        marginTop:"10px",
      }} 
      >BUSINESS
      </s.TextSubTitle>
      <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >
            My interests are in data analytics and finance. 
            I wrote my master's thesis on Bitcoin short timeframe trading where I compared mean reversion
            and momentum trading strategies and optimized parameters for those.

            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >I have also done real life trading with cryptocurrencies, but my thesis made me realize 
            that it is not my thing at least on the short time frame. Financial market analysist would be better 
            fit for me than actual trading.
            </s.TextDescription>
        <s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        padding: 20,
      }}    
      >PROGRAMMING
      </s.TextSubTitle>
      <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >
            I took couple programming courses at university (Java and Python) which were probably my favorite 
            subjects to study. Also, being involved with the crypto space made me want to learn coding to be able to
            take full advantage of the field.    
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >
            Languages I am most familiar with are Python, JS (also HTML and CSS), SQL and Solidity.
            I am definitely not a coding wizard yet but can work independently with my own projects.
            This website is an example of projects I have been working on.
            
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
          width: "80%",
          opacity: 0.85,
        }}
      >
          <s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
        marginTop: 10,
      }} 
      > NFT STARTUP
      </s.TextSubTitle>
      <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >
            At the moment I've been working on an upcoming NFT startup project with one associate.
            Thus far my role has included art engine building, website development and smart contract 
            preparation. The role also involves marketing strategy development, which will later be more about deployment and community management.
            I have also worked with digital art creation and overall brand building. 
            </s.TextDescription>
            <s.SpacerMedium/>
            <s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
      }} 
      > DATA ANALYTICS 
      </s.TextSubTitle>
            <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >I had one month training period with Seepia Games analytics department. 
            The job involved SQL query writing in AWS and query optimization. 
            I also did pair programming with my mentor, where the mentor made implementations while explaining 
            the code. I took part in the planning.
            </s.TextDescription>    
            <s.SpacerMedium/>
            <s.TextSubTitle
      style={{
        textAlign: "center",
        color: "var(--accent-text)",
      }} 
      > ATHLETE
      </s.TextSubTitle>
            <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >I have been managing myself as a 100 meter sprinter for few years now. I was able to raise myself in 5 years
            from nothing to one of the fastest women in Finland. 
            </s.TextDescription>
            <s.TextDescription
              style={{
                textAlign: "justify",
                color: "var(--accent-text)",
                padding: 20
              }}
            >This job containts brand building, social meadia content creation
            and negotiations with companies. Also, it has increased my networking skills with other athletes, coaches and potential sponsors.  
            </s.TextDescription>
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
export default Experience;