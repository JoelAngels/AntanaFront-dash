// //we need to create function that will take our form details and work on them , communicating with the backend in short
// import axios from "axios";

// //Create session for the current user
// import { sessionService } from "redux-react-session";

// //remote endpoint local
// // const remoteUrl = "http://localhost:3000/"
// const localUrl = "https://antana-staging.fly.dev/api/v1/auth/login";
// const currentUrl = localUrl;
// export const loginUser = (
//   credentials,
//   history,
//   setFieldError,
//   setSubmitting
// ) => {
//   //Post request using axios
//   axios
//     .post(localUrl, credentials, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((response) => {
//       // const { data } = response;
//       console.log(response);

//       // if (data.status === "FAILED") {
//       //   const { message } = data;
//       //   //Once the status is failed and we have the message from the data object
//       //   //check for specific error
//       //   if (message.includes("credentials")) {
//       //     setFieldError("email", message);
//       //     setFieldError("password", message);
//       //   } else if (message.includes("password")) {
//       //     setFieldError("password", message);
//       //   }
//       // } else if (data.status === 201) {
//       //   //IT PASSES and success full we store the data
//       //   //the data is an array, so for us to get the data which is an index, we need to put 0 cause its the first one
//       //   const userData = data.data[0];

//       //   //store the id of the data that the backend server returns
//       //   const token = userData._id;

//       //   ////Create session for the current user
//       //   sessionService
//       //     .saveSession(token)
//       //     .then(() => {
//       //       sessionService
//       //         .saveUser(userData)
//       //         .then(() => {
//       //           //move to the dashboard
//       //           history.push("/dashboard");
//       //         })
//       //         .catch((err) => {
//       //           console.log(err);
//       //         });
//       //     })
//       //     .catch((err) => console.log(err));
//       // }

//       // //complete submission
//       setSubmitting(false);
//     })
//     .catch((err) => console.log(err));
// };

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};

export const logoutUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};

/*
 Make checks and get some data
  const user = {
    name: "George",
    email: "boma@example.com",
  };
  const status = true;

  if (status === true) {
    //Allow access and redirect
  } else {
    //Return error to the user
  }

*/

//Reset
// export const forgotPassword = (
//   credentials,
//   history,
//   setFieldError,
//   setSubmitting
// ) => {
//   //Post request using axios
//   axios
//     .post("http://localhost:3000/user/requestPasswordReset", credentials, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((response) => {
//       const { data } = response;

//       if (data.status === "FAILED") {
//         const { message } = data;
//         //Once the status is failed and we have the message from the data object
//         //check for specific error
//         if (
//           message.includes("user") ||
//           message.includes("password") ||
//           message.includes("email")
//         ) {
//           setFieldError("email", message);
//         }
//       } else if (data.status === "PENDING") {
//         //IT PASSES and success full we store the data
//         //the data is an array, so for us to get the data which is an index, we need to put 0 cause its the first one
//         const { email } = credentials;
//         history.push(`/emailsent/${email}/${true}`);
//       }

//       //complete submission
//       setSubmitting(false);
//     })
//     .catch((err) => console.log(err));
// };
