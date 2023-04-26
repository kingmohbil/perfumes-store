import { createSlice, current } from '@reduxjs/toolkit';

export interface LinksInterface {
  index: number;
  name: string;
  href: string;
  active?: boolean;
}

const initialState: LinksInterface[] = [
  {
    index: 0,
    name: 'Products',
    href: '/products',
  },
  {
    index: 1,
    name: 'RecommendMe',
    href: '/recommend-me',
  },
  {
    index: 2,
    name: 'Login',
    href: '/auth/signin',
  },
  {
    index: 3,
    name: 'Cart',
    href: '/cart',
  },
];

export const mainNavSlice = createSlice({
  name: 'main_nav',
  initialState,
  reducers: {
    activate: (state, { payload }) => {
      if (payload.index === undefined) {
        return initialState;
      }
      for (let i of state) {
        if (i.index === payload.index) {
          i.active = true;
        } else {
          i.active = false;
        }
      }
    },
  },
});

export const { activate } = mainNavSlice.actions;
export default mainNavSlice.reducer;
