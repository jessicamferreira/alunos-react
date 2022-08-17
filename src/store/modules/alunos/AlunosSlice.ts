import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface ALunos {
  uid: string;
  title: string;
}

const adapter = createEntityAdapter<ALunos>({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.alunos
);

const alunosSlice = createSlice({
  name: "alunos",
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = alunosSlice.actions;
export default alunosSlice.reducer;
