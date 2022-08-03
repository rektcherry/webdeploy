import styled from "styled-components";
export const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--button);
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover{
    opacity: 0.7;
  }
`;

export const StyledButton2 = styled.button`
  padding: 15px;
  border:  20 px;
  border-image: linear-gradient(to right, darkblue, darkorchid) 1;
  background-color: var(--button);
  font-weight: bold;
  width: 100%;
  width: 170px;
  cursor: pointer;
  position: relative;
  color: white;
  :hover{
    opacity: 0.5;
`;

export const Arrow = styled.button`
  position: 'fixed';
  padding: '1rem 1.5rem';
  fontSize: '20px';
  bottom: '40px';
  right: '40px';
  color: 'black';
  textAlign: 'center';
  transition-duration: 0.4s;
  :hover{
    background-color: #4CAF50; 
    color: black;
}}`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 110px;
  padding: 10px;
`;



export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 0px solid var(--secondary);
  background-color: var(--accent);
  max-width: 100%;
  width: 500px;
  @media (min-width: 900px) {
    width: 500px;
  }
  @media (min-width: 1000px) {
    width: 240px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--primary-text);
  text-decoration: none;
`;