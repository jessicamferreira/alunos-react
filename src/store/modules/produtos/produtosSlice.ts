import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Produtos {
  codigoProduto:string;
  nome:string;
}

const adapter = createEntityAdapter<Produtos>({
  selectId:(item) => item.codigoProduto,
});

export const {selectAll,selectById} = adapter.getSelectors(
  (state:any) => state.produtos
);

const produtosSlice = createSlice({
  name: "produtos",
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  }
});

export default produtosSlice.reducer;
export const {addOne,addMany,updateOne} = produtosSlice.actions;