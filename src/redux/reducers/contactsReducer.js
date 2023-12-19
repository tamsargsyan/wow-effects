import * as actionTypes from "../types/contactsTypes";

const initialState = {
  contacts: null,
  loading: false,
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case actionTypes.FETCH_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
