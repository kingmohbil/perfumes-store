import StyledNavbar from './styles/styled_navbar';
import Link from 'next/link';
export default function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <h1>1% Perfumes</h1>
        <div className="toggle"></div>
        <div className="navbar-links">
          <Link href="#">Products</Link>
          <Link href="#">RecommendMe</Link>
          <Link href="#">Login</Link>
          <Link href="#">Cart</Link>
        </div>
      </nav>
    </StyledNavbar>
  );
}
