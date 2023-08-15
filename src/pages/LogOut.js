import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
} from "../components/Styles";

//logo
import Logo from "../assets/Logo.jpg";

const Logout = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledFormArea bg>
        <StyledTitle size={65}>
          <span style={{ color: "#f9004d" }}>Wel</span>come To{" "}
          <span style={{ color: "#f9004d" }}>Ant</span>ana
        </StyledTitle>
        <StyledSubTitle size={27}>Feel fee to explore our page</StyledSubTitle>
        <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default Logout;
