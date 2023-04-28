import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItem } from 'lib/store/slices/cart_slice';
import StyledCard from './styles/styled_card';
import CardType from 'types/products_interface';

export default function Card(props: CardType) {
  const dispatch = useDispatch();
  return (
    <>
      <StyledCard>
        <Link href={props.link || '#'}>
          <Image
            src={props.image || '/images/CoolWater.jpeg'}
            height="200"
            width="200"
            alt="cool water perfume"
          />
        </Link>
        <div className="card-details">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-description">{props.description}</p>
          <div className="card-actions">
            <h3 className="price">${props.price.toFixed(2)}</h3>
            <div className="card-buttons">
              <button className="cart" onClick={addItemToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );

  function addItemToCart() {
    dispatch(
      addItem({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );
  }
}
