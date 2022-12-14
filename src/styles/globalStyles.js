import styled from "styled-components";

export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-width:100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden; 
`;

export const ScrollBar = styled.div`
  overflow-y: auto;
  height: 100%;
  position: absolute;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  position: relative;
`;

export const  TextTitle = styled.p`
text-transform: uppercase;
width: 100%;
font-size: 35px;
@media (max-width: 320px) {
  font-size: 30px;
}
font-weight: 500;
line-height: 1.6;
color:white;
background: rgba(0,0,0,0);
  text-align: center;
  padding:7;
  margin-top: 10px;
text-shadow:
  0 0 7px #ffc0eb,
  0 0 10px #ffc0eb,
  0 0 21px #ffc0eb,
  0 0 42px #ff77f8,
  0 0 82px #ff77f8,
  0 0 92px #ff77f8,
  0 0 102px #ff77f8,
  0 0 151px #ff77f8 ;
  @keyframes flicker {
    0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
      //text-shadow: none;
      opacity: .99;
      
    }
    20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
      opacity: 0.4;
    }
  }
`;

export const TextSubTitle = styled.p`
text-transform: uppercase;
width: 100%;
font-size: 30px;
@media (max-width: 320px) {
  font-size: 25px;
}
  color: "var(--accent-text)";
  text-align: center;
  padding: 0;
  line-height: 1.6;
  background: -webkit-linear-gradient(deeppink, darkorchid, white );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


`;

export const TextDescription = styled.p`
text-transform: uppercase;
width: 100%;
font-size: 16px;
@media (max-width: 320px) {
  font-size: 15px;
}
  text-align: justify;
  color:"var(--accent-text)";
  line-height: 1.6;

`;

export const TextLink = styled.p`
text-transform: uppercase;
overflow-wrap: break-word; 
width: 100%;
padding: 20px;
font-size: 16px;
@media (max-width: 600px) {
  font-size: 14px;
}
@media (max-width: 320px) {
  font-size: 12px;
}
  text-align: justify;
  color:"var(--accent-text)";
  line-height: 1.6;

`;

export const eth = styled.p`

overflow-wrap: break-word; 
width: 100%;
padding: 20px;
font-size: 16px;
@media (max-width: 600px) {
  font-size: 12px;
}
@media (max-width: 320px) {
  font-size: 7px;
}
  text-align: justify;
  color:"var(--accent-text)";
  line-height: 1.6;

`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
