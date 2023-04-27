import StyledModal from './styles/styled_cart_modal';
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
    </StyledModal>
  );
}
