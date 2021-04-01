import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { adminReducer } from './adminReducer';
import { userReducer } from './userReducer';
import { wakamReducer } from './wakamReducer';
import { imaReducer } from './imaReducer';
import { quotationReducer } from './quotationReducer';
import { contractReducer } from './contractReducer';
import { resiliationReducer } from './resiliationReducer';

const rootReducer = combineReducers({
    authReducer,
    adminReducer,
    userReducer,
    wakamReducer,
    imaReducer,
    contractReducer,
    resiliationReducer,
    quotationReducer
});

export default rootReducer;
