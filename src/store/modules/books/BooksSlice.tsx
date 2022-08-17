import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface Book {
  uid: string;
  title: string;
}

const adapter = createEntityAdapter<Book>({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.sliceName
);

const sliceNameSlice = createSlice({
  name: 'books',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = sliceNameSlice.actions;
export default sliceNameSlice.reducer;
