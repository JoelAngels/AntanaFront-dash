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
import { FiMail, FiLock } from "react-icons/fi";

//Loader
import ClipLoader from "react-spinners/ClipLoader";

//Connect login component to our redux store and import login action

import { connect } from "react-redux";
import { loginUser } from "../auth/actions/loginUserAction";

//on Successful login or sign up, you might want to move to a new page eg dashboard
import { useNavigate } from "react-router-dom";

const Login = ({ loginUser }) => {
  //create useHistory variable
  const history = useNavigate();

  return (
    <div>
      <StyledContainer>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={30}>
            Antana Login
          </StyledTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              // console.log(values);
              //we want to use the loginuser action here
              loginUser(values, history, setFieldError, setSubmitting);
            }}
          >
            {/* Formik tag will a function as a child, and this contains a form*/}
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="boma@example.com"
                  icon={<FiMail />}
                />

                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="********"
                  icon={<FiLock />}
                />
                {/* Loader Spinner*/}
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Login</StyledFormButton>
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
            forgot password ? <TextLink to="/forgotpassword">Reset it</TextLink>
          </ExtraText>
          <ExtraText>
            New here? <TextLink to="/signup">Signup</TextLink>
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>All rights reserved &copy; 2022</CopyrightText>
      </StyledContainer>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
//34.04
