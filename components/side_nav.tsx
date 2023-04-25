import StyledNav from './styles/styled_side_nav';
import Link from 'next/link';
export default function SideNav() {
  return (
    <>
      <StyledNav>
        <Link href="/products/men">
          <h3>Men</h3>
        </Link>
        <Link href="/products/women">
          <h3>Women</h3>
        </Link>
        <Link href="/products/unisex">
          <h3>Unisex</h3>
        </Link>
      </StyledNav>
    </>
  );
}
