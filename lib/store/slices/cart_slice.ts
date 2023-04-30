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

interface RemovalPayload {
  payload: {
    id: string;
  };
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }: ActionType) => {
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

      console.log(current(state));
    },
    decrementItem: (state, { payload }: RemovalPayload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        const count = state.items[index].count || 1;
        if (count > 1) {
          state.items[index].count = count - 1;
          state.total -= state.items[index].price;
        } else {
          state.total -= state.items[index].price;
          state.items = state.items.filter((item) => item.id !== payload.id);
        }
      }
    },
    removeItem: (state, { payload }: RemovalPayload) => {
      state.items = state.items.filter((item) => {
        if (item.id === payload.id) {
          state.total -= item.price * (item.count || 1);
          return true;
        }
        return false;
      });
    },
  },
});

export default cartSlice.reducer;

export const { addItem, decrementItem } = cartSlice.actions;
