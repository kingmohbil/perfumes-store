import Navbar from 'components/navbar';
import SideNav from 'components/side_nav';
import ProductsContainer from 'components/products';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'lib/store/store';
import { activate } from 'lib/store/slices/main_nav_slice';
import ProductInterface from 'types/products_interface';
import dbConnect from 'lib/dbConnect';
const Products = require('models/products');

type PropsType = {
  products: ProductInterface[];
};

export default function ProductsList({ products }: PropsType) {
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

export async function getStaticProps() {
  await dbConnect();
  const products = await Products.find({});
  const jsonProducts = JSON.stringify(products);
  const result = JSON.parse(jsonProducts);
  console.log(`getStaticPropsCalled`);

  return {
    props: {
      products: result,
    },
    revalidate: 20,
  };
}
