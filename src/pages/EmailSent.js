import React from "react";
import {
  StyledTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  ExtraText,
  colors,
} from "../components/Styles";

//React Router
//logo
import Logo from "../assets/Logo.jpg";

const EmailSent = () => {
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
      <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>
          <span style={{ color: "#f9004d" }}>Account</span>Verification{" "}
        </StyledTitle>
        <ExtraText color={colors.light1}>
          Check your inbox and click the verification link inside to complete
          your registration. This link will expire shortly, so verify Soon!
        </ExtraText>
        <ButtonGroup>
          <StyledButton to="/login">Proceed</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default EmailSent;
