import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --title-font: 'Oswald', Arial, Helvetica, sans-serif;
    --body-font: 'Oswald', Arial, Helvetica, sans-serif;
    --theme-color1: #ffffff;
    --theme-color-alt1: #1c2227;
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
    background-color: var(--theme-color1);
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

  .theme-1 & {
    background-color: var(--bg-color-1);
  }

  .theme-2 & {
    background-color: var(--theme-color-alt1);
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 100%;
`;

const Layout = props => {
  const { children, theme } = props;

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  });

  return (
    <Wrapper>
      <GlobalStyles />
      <Container>{children}</Container>
    </Wrapper>
  );
};

const { number } = propTypes;

Layout.propTypes = {
  theme: number,
};

Layout.defaultProps = {
  theme: 1,
};

export default Layout;
