import { createSlice } from "@reduxjs/toolkit";

const alunoSlice = createSlice({
  name: "aluno",
  initialState: "",
  reducers: {
    adicionar: (state, action) => {
      return action.payload;
    },
    limpar: () => "",
  },
});

export const { adicionar, limpar } = alunoSlice.actions;
export default alunoSlice.reducer;
