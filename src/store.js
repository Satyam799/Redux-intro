import accountReducer from "./features/accounts/accountSlice"
import customerReducer from  "./features/customers/customerSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store=configureStore({
reducer:{
    account:accountReducer,
    customer:customerReducer

}
})

export default store
/*
{balance: 300, lone: 0, lonepurpose: 'to buy home'}*/