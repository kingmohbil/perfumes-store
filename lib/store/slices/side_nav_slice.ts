import { createSlice } from '@reduxjs/toolkit';
import { LinksInterface } from './main_nav_slice';

const initialState: LinksInterface[] = [
  {
    index: 0,
    name: 'Men',
    href: '/products/men',
  },
  {
    index: 1,
    name: 'Women',
    href: '/products/women',
  },
  {
    index: 2,
    name: 'Unisex',
    href: '/products/unisex',
  },
];

export const sideNavSlice = createSlice({
  name: 'side_nav',
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

export const { activate } = sideNavSlice.actions;
export default sideNavSlice.reducer;
