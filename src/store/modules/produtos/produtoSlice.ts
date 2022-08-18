import { createSlice } from "@reduxjs/toolkit";

const produtoSlice = createSlice ({
  name: "produtos",
  initialState:"",
  reducers:{
    adicionar:(state,action) => {
      return action.payload;
    },
    limpar: () => "",
  },
});
export default produtoSlice.reducer;
export const {adicionar,limpar} = produtoSlice.actions;