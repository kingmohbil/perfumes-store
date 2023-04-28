import { configureStore } from '@reduxjs/toolkit';
import main_nav_slice_reducer from './slices/main_nav_slice';
import side_nav_slice_reducer from './slices/side_nav_slice';
import cart_slice from './slices/cart_slice';

export const store = configureStore({
  reducer: {
    main_nav: main_nav_slice_reducer,
    side_nav: side_nav_slice_reducer,
    cart: cart_slice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
