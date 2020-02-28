import propTypes from 'prop-types';
import React, { cloneElement, Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
    overflow-y: scroll;
    padding: 0;

    /* &::-webkit-scrollbar {
      width: 10px;
    }
    
    &::-webkit-scrollbar-track {
      border-left-style: solid;
      border-left-width: 1px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
    }

    &.theme-1, &.theme-3 {
      &::-webkit-scrollbar-track {
        background-color: var(--theme-color2);
        border-color: var(--theme-color3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--theme-color3);
      }
    }

    &.theme-2 {
      &::-webkit-scrollbar-track {
        background-color: var(--theme-color-alt2);
        border-color: var(--theme-color-alt3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--theme-color-alt3);
      }
    } */
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
  width: 100%;
`;

class Layout extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: null,
      currentPath: null,
      currentPageState: 'hidden',
      previousPage: null,
      previousPath: null,
      previousPageState: 'shown',
      transitionComplete: false,
      theme: null,
    };
  }

  startTransition = () => {
    setTimeout(() => {
      this.setState(() => {
        return {
          currentPageState: 'showing',
          previousPageState: 'hiding',
        };
      });
    }, 50);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { children } = nextProps;
    const { currentPage, currentPath } = prevState;

    let theme = undefined;

    if (currentPath === '') {
      theme = 1;
    } else if (currentPath === 'code') {
      theme = 2;
    } else if (currentPath === 'resources') {
      theme = 3;
    }

    if (children !== currentPage) {
      return {
        currentPage: children,
        currentPath: nextProps.path.split('/')[1],
        currentPageState: 'hidden',
        previousPage: currentPage,
        previousPath: currentPath,
        previousPageState: 'shown',
        theme,
      };
    }

    return {
      theme,
    };
  }

  componentDidMount() {
    this.startTransition();
  }

  componentDidUpdate(prevProps, prevState) {
    const { children } = this.props;
    const { currentPage } = prevState;
    const { theme } = this.state;

    if (theme !== prevState.theme) {
      document.body.classList.remove(`theme-${prevState.theme}`);
      document.body.classList.add(`theme-${theme}`);
    }

    if (children !== currentPage) {
      this.startTransition();

      setTimeout(() => {
        this.setState(() => {
          return {
            currentPageState: 'shown',
            previousPage: null,
            previousPageState: 'hidden',
          };
        });
      }, 550);
    }
  }

  render() {
    const {
      currentPage,
      currentPath,
      previousPage,
      previousPath,
      previousPageState,
      currentPageState,
    } = this.state;

    let current = undefined;
    let previous = undefined;

    if (currentPath !== previousPath) {
      if (previousPage) {
        previous = cloneElement(previousPage, {
          transitionState: previousPageState,
        });
      }

      current = cloneElement(currentPage, {
        transitionState: currentPageState,
      });
    } else {
      current = cloneElement(currentPage, {
        transitionState: 'shown',
      });
    }

    return (
      <Wrapper className={currentPageState}>
        <GlobalStyles />
        <Container>
          {previous}
          {current}
        </Container>
      </Wrapper>
    );
  }
}

const { number } = propTypes;

Layout.propTypes = {
  theme: number,
};

Layout.defaultProps = {
  theme: 1,
};

export default Layout;
