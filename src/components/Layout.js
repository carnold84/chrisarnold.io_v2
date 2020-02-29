import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import AppHeader from './AppHeader';

const GlobalStyles = createGlobalStyle`
  :root {
    --title-font: 'Oswald', Arial, Helvetica, sans-serif;
    --body-font: 'Open Sans', Arial, Helvetica, sans-serif;
    --theme-color1: #ffffff;
    --theme-color2: #f7f8f9;
    --theme-color3: #eeeeee;
    --theme-color4: #dddddd;
    --theme-color-alt1: #1c2227;
    --theme-color-alt2: #20262b;
    --theme-color-alt3: #232b2f;
    --theme-color-alt4: #2b3338;
    --color1: #663399;
    --color2: #ded3ea;
    --color3: #f9f4ff;
    --color-alt1: #1c2227;
    --text-color1: #333333;
    --text-color2: #666666;
    --text-color3: #999999;
    --text-color-alt1: #ffffff;
    --text-color-alt2: #a6b2b9;
    --text-color-alt3: #839298;
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
    overflow: hidden;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  position: absolute;
  top: 0;
  width: 100vh;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  z-index: 0;
`;

export default (props) => {
  console.log(props)
  const {breadcrumbs, children, theme} = props;

  return (
    <Wrapper>
      <GlobalStyles />
      <AppHeader breadcrumbs={breadcrumbs} theme={theme} />
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
};
