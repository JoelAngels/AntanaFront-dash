import styled from "styled-components";

//background
import hero2 from "../assets/hero2.jpg";

//React router
import { Link } from "react-router-dom";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#f9004d",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), */
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0, #000 100%),
    url(${hero2});
  background-size: cover;
  background-attachment: fixed;
  /* overflow: hidden; */
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export const StyledSubTitle = styled.div`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
  position: relative;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  font-family: "Poppins", sans-serif;
  outline: none;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 55px;
  font-family: "Poppins", sans-serif;
`;

//login Styles//

export const StyledTextInput = styled.input`
/* width: 280px; */
width: 340px;
padding: 15px;
padding-left: 50px;
font-size: 17px;
outline: none;
letter-spacing: 1px;
color: ${colors.light2}
border: 0;
display: block;
margin: 5px auto 10px auto;
transition: ease-in-out 0.3s;
font-family: "Poppins", sans-serif;
border: none;



${(props) =>
  props.invalid &&
  `background-color: ${colors.red};    color: ${colors.primary}`};
   
  
  &:focus {
      background-color: ${colors.dark2};
      color: ${colors.primary}
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  outline: none;

  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  /* top: 35px; */
  top: 42px;
  ${(props) => props.right && `right: 15px`};
  ${(props) => !props.right && `left: 15px`};
`;

// Styles displaying the error message for validation*/

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ErrorText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  font-size: 12px;
  padding: 2px;
  margin-top: 10px;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

export const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.light2};
  position: absolute;
  bottom: -20px;
`;
