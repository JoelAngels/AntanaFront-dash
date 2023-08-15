import axiosInstance from "../../Helpers/axios";

import { get_error_message, set_field_error } from "./helpers";
// import { loginUser } from "./loginUserAction";

/**
 * This function's purpose will be to handle unexpected errors such
 */
const handle_unknown_error = (error) => {
  console.error(`Unknown Error ocurred: ${error}`);
};

/**
 * This function's purpose is to check whether there are errors
 * returned for either the email, password or password_confirmation.
 * It then formats the errors for each field, if they exist and finally
 * set the field errors
 */
const handle_error_response = (errors, setFieldError) => {
  set_field_error("email", get_error_message(errors.email), setFieldError);
  // set password field error
  set_field_error(
    "password",
    get_error_message(errors.password),
    setFieldError
  );
  // set password confirmation field error
  set_field_error(
    "password_confirmation",
    get_error_message(errors.password_confirmation),
    setFieldError
  );
};

export const signupUser = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    let creds = {
      user: { ...credentials, has_accepted_terms: true },
    };

    axiosInstance
      .post("/users", creds)
      .then((response) => {
        console.log(response);

        // //complete submission
        setSubmitting(false);
        //display message for email verification
        navigate(`/emailsent`);
      })
      .catch((err) => {
        if (err.response) {
          handle_error_response(err.response.data.errors, setFieldError);
        } else {
          handle_unknown_error(err);
        }

        setSubmitting(false);
      });
  };
  //Post request using axios
};
