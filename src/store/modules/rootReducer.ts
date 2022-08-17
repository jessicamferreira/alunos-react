import { combineReducers } from "@reduxjs/toolkit";

import books from "./books/BooksSlice";
import items from "./items/ItemsSlice";
import aluno from "./alunos/AlunoSlice";

export default combineReducers({
  books,
  items,
  aluno,
});
