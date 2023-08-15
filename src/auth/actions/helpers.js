/**
 * This module defines helper functions for the auth module
 */

/**
 * This function's purpose is to format the errors which are a list
 * and reduce them into a comma separated string
 */
const format_list_of_errors = (list) => {
  return list.reduce(
    (prev_value, current_value) => `${prev_value}, ${current_value}`
  );
};

/**
 * This function simply checks to ensure that the message is present and
 * returns either true or false
 */
const not_empty = (message) => message && message !== "";

/**
 * This function's purpose is to check whether the given field error is
 * set and if so returns a formatted error
 */
export const get_error_message = (field) =>
  field ? format_list_of_errors(field) : "";

/**
 * This function's purpose is to check whether of not to set the field error
 * to be displayed in frontend
 */
export const set_field_error = (field, message, setFieldError) => {
  if (not_empty(message)) {
    setFieldError(field, message);
  }
};
