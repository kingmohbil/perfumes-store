import StyledNav from './styles/styled_side_nav';
import Link from 'next/link';
import { LinksInterface } from 'lib/store/slices/main_nav_slice';
type PropsType = {
  links: LinksInterface[];
};
export default function SideNav({ links = [] }: PropsType) {
  return (
    <>
      <StyledNav>
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
      </StyledNav>
    </>
  );
}
