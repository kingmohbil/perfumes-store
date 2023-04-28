import StyledModal from './styles/styled_cart_modal';
import CartItem from './cart_item';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store/store';
type PropsType = {
  active: boolean;
  closeModal: () => void;
};
export default function CartModal({ active, closeModal }: PropsType) {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <StyledModal className={active ? 'active' : ''}>
      <button className="close-btn" onClick={closeModal}>
        {' '}
        X{' '}
      </button>
      {cart.items.map((item, index) => (
        <CartItem
          id={item.id}
          key={index}
          name={item.name}
          count={item.count}
          price={item.price}
        />
      ))}
      <hr />
      <div className="total-container">
        <p>Total = ${cart.total.toFixed(2)} </p>
      </div>
      <button className="checkout-btn">Checkout</button>
    </StyledModal>
  );
}
