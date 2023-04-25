import Navbar from 'components/navbar';
import SideNav from 'components/side_nav';
import ProductsContainer from 'components/products';
export default function ProductsList() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
        }}
      >
        <SideNav />
        <ProductsContainer />
      </div>
    </>
  );
}
