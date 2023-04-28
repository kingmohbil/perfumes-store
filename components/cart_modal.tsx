import StyledModal from './styles/styled_cart_modal';
import CartItem from './cart_item';
type PropsType = {
  active: boolean;
  closeModal: () => void;
};
export default function CartModal({ active, closeModal }: PropsType) {
  return (
    <StyledModal className={active ? 'active' : ''}>
      <button className="close-btn" onClick={closeModal}>
        {' '}
        X{' '}
      </button>
      <CartItem name="name of products" />
      <CartItem name="product" />
      <hr />
      <div className="total-container">
        <p>Total = $500.00 </p>
      </div>
      <button className="checkout-btn">Checkout</button>
    </StyledModal>
  );
}
