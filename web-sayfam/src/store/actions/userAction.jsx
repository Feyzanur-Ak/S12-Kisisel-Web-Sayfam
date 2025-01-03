export const SET_FIELD = "SET-FIELD";
export const SET_ERRORS = "SET-ERRORS";
export const RESET="RESET"

export const setField = (name, value) => ({ 
    type: SET_FIELD,
    name,
    value,
});
{/* name alan adı value ise alacağı yeni deper */}
export const setErrors = (errors) => ({
    type: SET_ERRORS,
    errors,
});
{/* errors bir hata listesini temsil etmektedir */}
export const reset = () => ({
  type: RESET,
});