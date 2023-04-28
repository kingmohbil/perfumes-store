import StyledItem from './styles/styled_cart_item';
import { useDispatch } from 'react-redux';
import { addItem } from 'lib/store/slices/cart_slice';
import CartType from 'types/cart_interface';
export default function CartItem(props: CartType) {
  const dispatch = useDispatch();
  return (
    <StyledItem id={props.id}>
      <button className="decrement-btn"> - </button>
      <p className="title">{props.name}</p>
      <button
        className="increment-btn"
        onClick={() => {
          dispatch(addItem(props));
        }}
      >
        +
      </button>
      <p className="count">{props.count || 1}</p>
      <p className="price">${(props.price * (props.count || 1)).toFixed(2)}</p>
    </StyledItem>
  );
}
