import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  line-height: 6rem;
  margin: 0 0 25px;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.2rem;
  margin: 0 0 10px;
  text-align: justify;

  @media ${breakpoint('sm')} {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media ${breakpoint('md')} {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
`;

export default () => (
  <Layout>
    <Wrapper>
      <Heading>Hello,</Heading>
      <Paragraph>
        I'm Chris Arnold, a front-end developer and designer in Christchurch,
        New Zealand. I like to write clean, elegant, functional code and partner
        it with clean, beautiful design and well thought out, user-friendly
        interfaces.
      </Paragraph>
    </Wrapper>
  </Layout>
);