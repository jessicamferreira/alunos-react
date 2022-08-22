import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Carros {
  marca: string;
  cor: string;
  modelo: string;
}

const adapter = createEntityAdapter<Carros>({
  selectId: (carro) => carro.modelo,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.carros
);

const carroSlice = createSlice({
  name: "carros",
  initialState: adapter.getInitialState(),
  reducers: {
    addCarro: adapter.addOne,
    addManyCarros: adapter.addMany,
    deleteAll: adapter.removeAll,
  },
});

export const { addCarro, addManyCarros, deleteAll } = carroSlice.actions;
export default carroSlice.reducer;
