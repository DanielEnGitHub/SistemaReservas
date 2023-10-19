import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import sidebarReducer from "../features/sidebarSlice";
import eventReducer from "../features/eventSlice";
import modalEventSlice from "../features/modalEventSlice";
import categoryReducer from "../features/categorySlice";
import brandReducer from "../features/brandSlice";
import variantReducer from "../features/variantSlice";
import productReducer from "../features/productSlice";
import orderSlice from "../features/orderSlice";
import modalOrderSlice from "../features/modalOrderSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    event: eventReducer,
    modalEvent: modalEventSlice,
    modalOrder: modalOrderSlice,
    category: categoryReducer,
    brand: brandReducer,
    variant: variantReducer,
    product: productReducer,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
