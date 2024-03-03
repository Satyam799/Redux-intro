import { applyMiddleware, combineReducers, createStore } from "redux"
import accountReducer from "./features/accounts/accountSlice"
import customerReducer from  "./features/customers/customerSlice"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const rootreducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
})
export const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)));


/*
{balance: 300, lone: 0, lonepurpose: 'to buy home'}*/