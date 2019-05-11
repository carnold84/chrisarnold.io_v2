import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/logo.svg';

const Wrapper = styled.div`
  fill: inherit;
  height: 26px;
  width: 50px;
`;

const AppLogo = props => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default AppLogo;
