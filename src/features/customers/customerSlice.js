import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullname: "",
  nationalIDs: "",
  createdAS: ""
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullname, nationalIDs) {
        return {
          payload: {
            fullname,
            nationalIDs,
            createdate: new Date().toISOString()
          }
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationalIDs = action.payload.nationalIDs;
        state.createdAS = action.payload.createdate;
      }
    },
    updateName(state, action) {
      state.fullname = action.payload;
    }
  }
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

