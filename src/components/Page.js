import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  justify-content: flex-start;
  left: 0;
  overflow: auto;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  &.theme-1 {
    background-color: var(--theme-color1);
    color: var(--text-color1);
    fill: var(--text-color1);
  }

  &.theme-2 {
    background-color: var(--theme-color2);
    color: var(--text-color1);
    fill: var(--text-color1);
  }

  &.theme-3 {
    background-color: var(--theme-color-alt1);
    color: var(--text-color-alt1);
    fill: var(--text-color-alt1);
  }
`;

const Header = styled.div`
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;

  @media ${breakpoint('md')} {
    height: 100px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: ${props => props.maxWidth};
  z-index: 0;
`;

const Page = ({ breadcrumbs, children, maxWidth, theme }) => {
  return (
    <Wrapper className={`theme-${theme}`}>
      <Header>
        <AppHeader breadcrumbs={breadcrumbs} theme={theme} />
      </Header>
      <Content maxWidth={maxWidth}>{children}</Content>
    </Wrapper>
  );
};

const { node, number, string } = propTypes;

Page.propTypes = {
  children: node,
  maxWidth: string,
  theme: number,
};

Page.defaultProps = {
  maxWidth: 'auto',
  theme: 1,
};

export default Page;
