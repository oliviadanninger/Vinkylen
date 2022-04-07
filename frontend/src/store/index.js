import { reducers } from "../reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {reducers}
  })

export default store;