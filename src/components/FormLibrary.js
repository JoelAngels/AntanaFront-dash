import { useState } from "react";
import { useField } from "formik";
import { StyledTextInput, StyledLabel, StyledIcon, ErrorMsg } from "./Styles";

//Eye for password
import { FiEye, FiEyeOff } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
  //meta contains the information about the field
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      {/* This code removes the double password placeholders */}
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}

      {/* varry if a password can be seen or not */}

      {props.type === "password" && (
        //When you have the error, message, the background will be changed to red
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {/* Toggle Function when you click it */}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} right>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {/* Creating the Error message component, if the input has been touched and the error exist then we can  */}
      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
      )}
    </div>
  );
};

//I am the fastest typier when it comes to code, even people like courtney know
