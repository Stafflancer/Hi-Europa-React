import { userInfoConstants } from "../constants/actionTypes";

const initialState = {
  userInfo: {
    gender: "",
    email: "",
    firstName: "",
    lastName: "",
    subscribe: false,
    phoneNumber: "",
    postCode: "",
    accomodationType: "",
    prospectType: "",
    residenceType: "",
    floors: "",
    area: "",
    rooms: "",
    insuranceStatus: "",
    insuranceCancel: "",
    insuranceDuration: "",
    livingDuration: "",
    precision_one: null,
    precision_two: null,
    precision_tree: null,
    exactAddress: "",
    additionalAddress: "",
    city: "",
  },
};
export function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case userInfoConstants.UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    default:
      return state;
  }
}
