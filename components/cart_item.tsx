import StyledItem from './styles/styled_cart_item';
type PropsType = {
  name: string;
};
export default function CartItem({ name }: PropsType) {
  return (
    <StyledItem>
      <button className="decrement-btn"> - </button>
      <p className="title">{name}</p>
      <button className="increment-btn"> + </button>
      <p className="count">1</p>
      <p className="price">$300.00</p>
    </StyledItem>
  );
}
