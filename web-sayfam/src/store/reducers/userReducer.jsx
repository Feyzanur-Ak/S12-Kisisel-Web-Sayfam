import { SET_ERRORS, SET_FIELD, RESET } from "../actions/userAction";


const initialContactState = {
    name: "",
    surname: "",
    message: "",
    errors: {},
  }

export default function userReducer(state = initialContactState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                errors: action.errors,
            }

        case SET_FIELD:
            return {
                ...state,
                [action.name]: action.value,
            }

        case RESET:
            return {}

        default:
            return state
    }
}