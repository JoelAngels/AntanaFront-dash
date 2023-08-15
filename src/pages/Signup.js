/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  StyledFormArea,
  StyledFormButton,
  ButtonGroup,
  StyledTitle,
  Avatar,
  colors,
  ExtraText,
  TextLink,
  CopyrightText,
  StyledContainer,
} from "../components/Styles";

import Logo from "../assets/Logo.jpg";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLibrary";

//Yup
import * as Yup from "yup";

//icons
import {
  FiMail,
  FiLock,
  // FiUser,
  // FiCalendar,
  // FiUserCheck,
} from "react-icons/fi";

//Loader
import ClipLoader from "react-spinners/ClipLoader";

import { connect } from "react-redux";
import { signupUser } from "../auth/actions/signupUserAction";

//on Successful login or sign up, you might want to move to a new page eg dashboard
import { useNavigate } from "react-router-dom";

const Signup = ({ signupUser }) => {
  const history = useNavigate();
  return (
    <div>
      <StyledContainer>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={30}>
            Antana SignUp
          </StyledTitle>
          <Formik
            initialValues={{
              // firstName: "",
              // surName: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
              // firstName: Yup.string().required("Required"),
              // surName: Yup.string().min(3).required("Required"),
              // dateOfBirth: Yup.date().required("Required"),
              password_confirmation: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password")], "Passwords must match"),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              signupUser(values, history, setFieldError, setSubmitting);
            }}
          >
            {/* Formik tag will a function as a child, and this contains a form*/}
            {({ isSubmitting }) => (
              <Form>
                {/* <TextInput
                name="firstName"
                type="text"
                label="First Name"
                placeholder="Antana minds"
                icon={<FiUser />}
              />

              <TextInput
                name="surName"
                type="text"
                label="Surname"
                placeholder="Antana"
                icon={<FiUserCheck />}
              /> */}
                {/* <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                icon={<FiCalendar />}
              /> */}

                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="antana@example.com"
                  icon={<FiMail />}
                />

                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="********"
                  icon={<FiLock />}
                />

                <TextInput
                  name="password_confirmation"
                  type="password"
                  label="Confirm Password"
                  placeholder="********"
                  icon={<FiLock />}
                />

                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#1F2937",
                  }}
                >
                  Clicking on signup confirms you have accepted
                  <br /> <a href="#">Terms and Condtions</a>
                </span>

                {/* Loader */}
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Signup</StyledFormButton>
                  )}

                  {isSubmitting && (
                    <ClipLoader
                      type="ClipLoader"
                      color={colors.theme}
                      height={49}
                      width={100}
                    />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          <ExtraText>
            Already have an account? <TextLink to="/login">Login</TextLink>
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>All rights reserved &copy; 2022</CopyrightText>
      </StyledContainer>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
//34.04
