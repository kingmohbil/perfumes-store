import Head from 'next/head';
import ProductForm from 'components/product_form';
export default function UploadProducts() {
  return (
    <>
      <style jsx global>{`
        #__next {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <ProductForm />
    </>
  );
}
