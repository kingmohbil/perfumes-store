import StyledNavbar from './styles/styled_navbar';
import Link from 'next/link';
import { LinksInterface } from 'lib/store/slices/main_nav_slice';
import { useState } from 'react';
import CartModal from './cart_modal';
type PropsType = {
  links: LinksInterface[];
};
export default function Navbar({ links = [] }: PropsType) {
  const [modal, setModal] = useState(false);
  return (
    <StyledNavbar>
      <nav>
        <Link href="/" className="active">
          <h1>1% Perfumes</h1>
        </Link>
        <div className="toggle"></div>
        <div className="navbar-links">
          {links.map((link) => {
            return (
              <Link
                key={link.index}
                href={link.href}
                className={link.active ? 'active' : ''}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setModal(true);
            }}
          >
            Cart
          </button>
          <CartModal
            active={modal}
            closeModal={() => {
              setModal(false);
            }}
          />
        </div>
      </nav>
    </StyledNavbar>
  );
}
