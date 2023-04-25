import StyledNavbar from './styles/styled_navbar';
import Link from 'next/link';
export default function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <Link href="/" className="active">
          <h1>1% Perfumes</h1>
        </Link>
        <div className="toggle"></div>
        <div className="navbar-links">
          <Link href="products">Products</Link>
          <Link href="#">RecommendMe</Link>
          <Link href="#">Login</Link>
          <Link href="#">Cart</Link>
        </div>
      </nav>
    </StyledNavbar>
  );
}
