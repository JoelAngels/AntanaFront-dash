import axiosInstance from "../../Helpers/axios";

// import {get_error_message} from "./helpers"

//Create session for the current user
// import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    let creds = {
      user: { ...credentials },
    };

    axiosInstance
      .post("/auth/login", creds)
      .then((response) => {
        console.log(response);

        // //complete submission
        setSubmitting(false);
      })
      .catch((err) => {
        //   console.error(err.response.data);
        const message = err.response.data.details;

        setFieldError("email", message);
        setFieldError("password", message);

        setSubmitting(false);
      });
  };
  //Post request using axios
};
