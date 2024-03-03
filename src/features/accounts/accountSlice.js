import { createSlice } from "@reduxjs/toolkit"


const initialState={
    balance:0,
    lone:0,
    lonepurpose:"",
    isLoading:false
}

const accountslice=createSlice({
    name:"account",
initialState,
    reducers:{
        deposit(state,action){
            console.log(action)
            state.balance+=action.payload
            state.isLoading=false
        },
        withdraw(state,action){
            state.balance-=action.payload
        },
        requestlone:{
            prepare(amount,purpose){
              return {
                payload:{amount,purpose}
            }
            },
            reducer(state,action){
            if(state.lone >0)return

            state.lone=action.payload.amount
            state.lonepurpose=action.payload.purpose
            state.balance=state.balance+action.payload.amount
        }},
        paylone(state){
            state.balance=state.balance-state.lone

            state.lone=0
            state.lonepurpose=""
        },
        convertingCurrency(state){
            state.isLoading=true
        }
       
    }
})

console.log(accountslice)
export const {withdraw,requestlone,paylone}=accountslice.actions
export function deposit(amount,currency){
    if(currency==="USD")
    return {type:'account/deposit',payload:amount}
    return async function(dispatch,getState){
        dispatch({type:"account/convertingCurrency"})
        const host = 'api.frankfurter.app';
        const hi =await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
        const data=await hi.json();
        const converted= data.rates.USD
        dispatch({type:'account/deposit',payload:converted})

    }

}


export default accountslice.reducer





    