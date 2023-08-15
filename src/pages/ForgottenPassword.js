// import React from "react";
// import {
//   StyledFormArea,
//   StyledFormButton,
//   ButtonGroup,
//   StyledTitle,
//   Avatar,
//   colors,
//   ExtraText,
//   TextLink,
//   CopyrightText,
// } from "../components/Styles";

// import Logo from "../assets/Logo.jpg";

// //formik
// import { Formik, Form } from "formik";
// import { TextInput } from "../components/FormLibrary";

// //Yup
// import * as Yup from "yup";

// //icons
// import { FiMail } from "react-icons/fi";

// //Loader
// import ClipLoader from "react-spinners/ClipLoader";

// //Connect login component to our redux store and import login action

// import { connect } from "react-redux";
// import { forgetPasswordUserAction } from "../auth/actions/forgotPasswordUserAction";

// //on Successful login or sign up, you might want to move to a new page eg dashboard
// import { useNavigate } from "react-router-dom";

// const ForgottenPassword = ({ loginUser }) => {
//   //create useHistory variable
//   const history = useNavigate();

//   return (
//     <div>
//       <StyledFormArea>
//         <Avatar image={Logo} />
//         <StyledTitle color={colors.theme} size={30}>
//           Password Reset
//         </StyledTitle>
//         <Formik
//           initialValues={{
//             email: "",
//             redirectUrl: "http://localhost:3000/forgotpassword",
//           }}
//           validationSchema={Yup.object({
//             email: Yup.string()
//               .email("Invalid email address")
//               .required("Required"),
//           })}
//           onSubmit={(values, setSubmitting, setFieldError) => {
//             console.log(values);
//             //we want to use the loginuser action here
//             loginUser(values, history, setFieldError, setSubmitting);
//           }}
//         >
//           {/* Formik tag will a function as a child, and this contains a form*/}
//           {({ isSubmitting }) => (
//             <Form>
//               <TextInput
//                 name="email"
//                 type="text"
//                 label="Enter your Email Address"
//                 placeholder="boma@example.com"
//                 icon={<FiMail />}
//               />

//               {/* Loader */}
//               <ButtonGroup>
//                 {!isSubmitting && (
//                   <StyledFormButton type="submit">Submit</StyledFormButton>
//                 )}

//                 {isSubmitting && (
//                   <ClipLoader
//                     type="ClipLoader"
//                     color={colors.theme}
//                     height={49}
//                     width={100}
//                   />
//                 )}
//               </ButtonGroup>
//             </Form>
//           )}
//         </Formik>
//         <ExtraText>
//           Already have an account? <TextLink to="/login">Login</TextLink>
//         </ExtraText>
//       </StyledFormArea>
//       <CopyrightText>All rights reserved &copy;2022</CopyrightText>
//     </div>
//   );
// };

// export default connect(null, { ForgottenPassword })(ForgottenPassword);
// //34.04
