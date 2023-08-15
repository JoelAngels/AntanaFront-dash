// export const forgotPassword = (
//     credentials,
//     history,
//     setFieldError,
//     setSubmitting
//   ) => {
//     //Post request using axios
//     axios
//       .post("http://localhost:3000/user/requestPasswordReset", credentials, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         const { data } = response;

//         if (data.status === "FAILED") {
//           const { message } = data;
//           //Once the status is failed and we have the message from the data object
//           //check for specific error
//           if (
//             message.includes("user") ||
//             message.includes("password") ||
//             message.includes("email")
//           ) {
//             setFieldError("email", message);
//           }
//         } else if (data.status === "PENDING") {
//           //IT PASSES and success full we store the data
//           //the data is an array, so for us to get the data which is an index, we need to put 0 cause its the first one
//           const { email } = credentials;
//           history.push(`/emailsent/${email}/${true}`);
//         }

//         //complete submission
//         setSubmitting(false);
//       })
//       .catch((err) => console.log(err));
//   };
