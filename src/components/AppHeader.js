import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import AppLogo from './AppLogo';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0;
  padding: 40px;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media ${breakpoint('md')} {
    padding: 60px;
  }

  @media ${breakpoint('lg')} {
    padding: 80px;
  }
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space - between;
`;

const NavLink = styled(Link).attrs({
  activeClassName: 'is-active',
})`
  border-bottom: 1px solid transparent;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0 30px;
  padding: 0 0 3px;
  text-decoration: none;
  text-transform: uppercase;

  &.is-active {
    border-color: inherit;
  }
`;

const AppHeader = ({ bgColor, color }) => {
  return (
    <Wrapper
      style={{
        backgroundColor: `var(${bgColor})`,
        color: `var(${color})`,
        fill: `var(${color})`,
      }}
    >
      <Link to={'/'}>
        <AppLogo />
      </Link>
      <Nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/code'}>Code</NavLink>
        {/* <NavLink to={'/notes'}>Notes</NavLink> */}
      </Nav>
    </Wrapper>
  );
};

const { string } = propTypes;

AppHeader.propTypes = {
  bgColor: string,
  color: string,
};

AppHeader.defaultProps = {
  bgColor: '--bg-color1',
  color: '--text-color1',
};

export default AppHeader;
