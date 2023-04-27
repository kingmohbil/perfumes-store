import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from 'lib/store/store';
import { activate } from 'lib/store/slices/main_nav_slice';
import Navbar from 'components/navbar';

export default function RecommendedPage() {
  const dispatch = useDispatch();
  const links = useSelector((state: RootState) => state.main_nav);
  useEffect(() => {
    dispatch(activate({ index: 1 }));
  });
  return (
    <>
      <Navbar links={links} />
      <h1>Recommend Me Page</h1>
    </>
  );
}
