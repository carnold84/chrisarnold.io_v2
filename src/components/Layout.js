import propTypes from 'prop-types';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import AppHeader from '../components/AppHeader';

import breakpoint from '../utils/breakpoint';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color1: #ffffff;
    --color1: #663399;
    --color-alt1: #1c2227;
    --text-color1: #333333;
    --text-color2: #666666;
    --text-color3: #999999;
    --text-color-alt1: #ffffff;
    --text-color-alt2: #a6b2b9;
    --text-color-alt3: #718087;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    color: #222222;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-break: 22px;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: var(${props => props.bgColor});
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 0;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 140px 40px;

  @media ${breakpoint('md')} {
    padding: 180px 100px;
  }

  @media ${breakpoint('lg')} {
    padding: 220px;
  }
`;

const Content = styled.section`
  max-width: 900px;
  width: 100%;
`;

const Layout = ({ bgColor, appHeaderColor, children }) => {
  return (
    <Wrapper>
      <GlobalStyles bgColor={bgColor} />
      <AppHeader bgColor={bgColor} color={appHeaderColor} />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};

const { string } = propTypes;

Layout.propTypes = {
  appHeaderColor: string,
  bgColor: string,
};

Layout.defaultProps = {
  appHeaderColor: '--text-color1',
  bgColor: '--bg-color1',
};

export default Layout;
