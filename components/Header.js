import NavLink from '/components/NavLink';
import styled from 'styled-components';

export default function Header() {
  return (
    <AppHeader>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/product">Product</NavLink>
        <NavLink href="/team">Team</NavLink>
        <NavLink href="/account">Account</NavLink>
      </Nav>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
