import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { adminReducer } from "./adminReducer";
import { userReducer } from "./userReducer";
import { wakamReducer } from "./wakamReducer";
import { imaReducer } from "./imaReducer";
import { quotationReducer } from "./quotationReducer";
import { imaQuotationReducer } from "./imaQuotationReducer";
import { userInfoReducer } from "./userInfoReducer";
import { popupReducer } from "./popupReducer";
import { contractReducer } from "./contractReducer";
import { resiliationReducer } from "./resiliationReducer";
import { interventionReducer } from "./interventionReducer";
import { residentReducer } from "./residentReducer";
import { prospectReducer } from "./prospectReducer";
import { imaUserReducer } from "./imaUserReducer";
import { headerReducer } from "./headerReducer";

const rootReducer = combineReducers({
  authReducer,
  adminReducer,
  userReducer,
  wakamReducer,
  imaReducer,
  quotationReducer,
  imaQuotationReducer,
  userInfoReducer,
  popupReducer,
  contractReducer,
  resiliationReducer,
  residentReducer,
  interventionReducer,
  prospectReducer,
  imaUserReducer,
  headerReducer,
});

export default rootReducer;
