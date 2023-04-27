import Navbar from 'components/navbar';
import SideNav from 'components/side_nav';
import ProductsContainer from 'components/products';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'lib/store/store';
import { activate } from 'lib/store/slices/main_nav_slice';

export default function ProductsList() {
  const dispatch = useDispatch();
  const links = useSelector((state: RootState) => state.main_nav);
  const sideLinks = useSelector((state: RootState) => state.side_nav);
  useEffect(() => {
    dispatch(activate({ index: 0 }));
  });
  return (
    <>
      <Navbar links={links} />
      <SideNav links={sideLinks} />
      <ProductsContainer />
    </>
  );
}
