import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import CloseIcon from '../assets/icon/close.svg';

import AppLogo from './AppLogo';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0;
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 1;

  .theme-1 & {
    background-color: var(--theme-color1);
    color: var(--text-color1);
    fill: var(--text-color1);
  }

  .theme-2 & {
    background-color: var(--theme-color2);
    color: var(--text-color1);
    fill: var(--text-color1);
  }

  .theme-3 & {
    background-color: var(--theme-color-alt1);
    color: var(--text-color-alt1);
    fill: var(--text-color-alt1);
  }

  @media ${breakpoint('md')} {
    padding: 40px;
  }
`;

const Title = styled.div`
  display: flex;
`;

const BreadCrumbs = styled.div`
  display: flex;
  margin: 0 0 0 20px;
`;

const BreadCrumbLink = styled(Link)`
  color: inherit;
  margin: 0;
  text-decoration: none;
`;

const BreadCrumbText = styled.h2`
  font-family: var(--title-font), Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 0 10px;
  text-transform: uppercase;

  &:after {
    content: '/';
    margin: 0 0 0 10px;
  }

  &:last-child {
    &:after {
      content: '';
      margin: 0;
    }
  }

  .theme-1 & {
    color: var(--text-color2);

    &:last-child {
      color: var(--text-color1);
    }
  }

  .theme-2 & {
    color: var(--text-color3);

    &:last-child {
      color: var(--text-color2);
    }
  }

  .theme-3 & {
    color: var(--text-color-alt2);

    &:last-child {
      color: var(--text-color-alt1);
    }
  }
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link).attrs({
  activeClassName: 'is-active',
})`
  border-bottom: 1px dotted transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 3px 0 0 30px;
  padding: 0 0 2px;
  text-decoration: none;
  text-transform: uppercase;

  &.is-active {
    border-color: inherit;
  }
`;

const CloseLink = styled(Link)`
  align-items: center;
  display: flex;
  fill: var(--text-color-alt2);
  justify-content: center;
  margin: 0 0 0 10px;
  text-decoration: none;
`;

const AppHeader = ({ breadcrumbs, hasClose, theme }) => {
  let classes = [];

  if (hasClose) {
    classes = ['has-close'];
  }

  if (theme === 1) {
    classes = ['theme-1'];
  }

  let crumbs;

  if (breadcrumbs) {
    crumbs = breadcrumbs.map((item, i) => {
      const { link, text } = item;
      return link ? (
        <BreadCrumbText key={`${text}-${i}`}>
          <BreadCrumbLink to={link}>{text}</BreadCrumbLink>
        </BreadCrumbText>
      ) : (
        <BreadCrumbText key={`${text}-${i}`}>{text}</BreadCrumbText>
      );
    });
  }

  return (
    <Wrapper className={classes}>
      <Title>
        <Link to={'/'}>
          <AppLogo />
        </Link>
        {crumbs && <BreadCrumbs>{crumbs}</BreadCrumbs>}
      </Title>
      {!hasClose && (
        <Nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/code'}>Code</NavLink>
          {/* <NavLink to={'/notes'}>Notes</NavLink> */}
          <NavLink to={'/resources'}>Resources</NavLink>
        </Nav>
      )}
      {hasClose && (
        <CloseLink to={'/'}>
          <CloseIcon />
        </CloseLink>
      )}
    </Wrapper>
  );
};

const { arrayOf, bool, number, shape, string } = propTypes;

AppHeader.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      link: string,
      text: string.isRequired,
    }),
  ),
  hasClose: bool,
  theme: number,
};

AppHeader.defaultProps = {
  hasClose: false,
  theme: 1,
};

export default AppHeader;
