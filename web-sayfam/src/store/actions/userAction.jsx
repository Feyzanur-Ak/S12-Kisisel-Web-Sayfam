export const SET_FIELD = "SET-FIELD";
export const SET_ERRORS = "SET-ERRORS";
export const RESET="RESET"

export const setField = (name, value) => ({
    type: SET_FIELD,
    name,
    value,
});

export const setErrors = (errors) => ({
    type: SET_ERRORS,
    errors,
});

export const reset = () => ({
  type: RESET,
});