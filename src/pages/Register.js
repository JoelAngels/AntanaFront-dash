import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledContainer,
} from "../components/Styles";

//logo
import Logo from "../assets/Logo.jpg";

const Home = () => {
  return (
    <StyledContainer>
      <div>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            image={Logo}
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "50px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "auto",
              position: "relative",
              top: "200px",
            }}
          />
        </div>
        <StyledTitle size={75}>
          <span style={{ color: "#f9004d" }}>Join</span> Us At{" "}
          <span style={{ color: "#f9004d" }}>Ant</span>ana
        </StyledTitle>
        <StyledSubTitle size={35}>
          🚨attachments 🔥internships 🚀workshops
        </StyledSubTitle>
        <ButtonGroup>
          <StyledButton to="/login">Login</StyledButton>
          <StyledButton to="/signup">Signup</StyledButton>
        </ButtonGroup>
      </div>
    </StyledContainer>
  );
};

export default Home;
