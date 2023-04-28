import { createSlice, current } from '@reduxjs/toolkit';
import CartItem from 'types/cart_interface';

const initialState: CartType = {
  items: [],
  total: 0,
};

interface CartType {
  items: CartItem[];
  total: number;
}
interface ActionType {
  payload: CartItem;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }: ActionType) => {
      console.log('Add Item reducer called');
      if (state.items.length === 0) {
        state.items.push({ ...payload, count: 1 });
        state.total = payload.price;
      } else {
        const index = state.items.findIndex(
          (product) => product.id === payload.id
        );
        if (index === -1) {
          state.items.push({ ...payload, count: 1 });
          state.total += payload.price;
        } else {
          const count = state.items[index].count || 1;
          state.items[index].count = count + 1;
          state.total += payload.price;
        }
      }
      console.log(current(state));
    },
  },
});

export default cartSlice.reducer;

export const { addItem } = cartSlice.actions;
