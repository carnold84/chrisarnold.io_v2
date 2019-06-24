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
    --theme-color-alt2: #21282d;
    --theme-color-alt3: #2d353c;
    --theme-color-alt4: #465058;
    --color1: #663399;
    --color2: #ded3ea;
    --color3: #f9f4ff;
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
  overflow: auto;
  position: absolute;
  width: 100%;
  z-index: 0;

  &.showing,
  &.hiding {
    overflow: hidden;
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

class Layout extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: null,
      previousPage: null,
      currentPageState: 'hidden',
      previousPageState: 'shown',
      transitionComplete: false,
    };
  }

  startTransition = () => {
    this.setState(() => {
      return {
        currentPageState: 'showing',
        previousPageState: 'hiding',
      };
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { children } = nextProps;
    const { currentPage } = prevState;

    if (children !== currentPage) {
      return {
        currentPage: children,
        previousPage: currentPage,
        currentPageState: 'hidden',
        previousPageState: 'shown',
      };
    }

    return null;
  }

  componentDidMount() {
    this.startTransition();
  }

  componentDidUpdate(prevProps, prevState) {
    const { children } = this.props;
    const { currentPage } = prevState;

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
      }, 500);
    }
  }

  render() {
    const {
      currentPage,
      previousPage,
      previousPageState,
      currentPageState,
    } = this.state;

    let previous = undefined;

    if (previousPage) {
      previous = cloneElement(previousPage, {
        transitionState: previousPageState,
      });
    }
    const current = cloneElement(currentPage, {
      transitionState: currentPageState,
    });

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
